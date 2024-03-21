require ('dotenv').config()
const express = require ('express')
const cors = require('cors')
const app =express()
const port = process.env.PORT

const roles = require('./utils/roles')
const {checkSchema} = require('express-validator')
const {registerValidationSchema,loginValidationSchema} = require('./app/validations/user-validator')

const userCtrl = require ('./app/controllers/user-controller')
const configureDb = require('./config/db')
const { authenticateUser, authorizeUser } = require('./app/middlewares/auth')


configureDb()
app.use(cors())
app.use(express.json())

app.post('/api/user/register', checkSchema(registerValidationSchema), userCtrl.register)
app.post('/api/create-moderator',authenticateUser,authorizeUser([roles.admin]),checkSchema(registerValidationSchema),userCtrl.registerModerator)
app.post('/api/user/login',checkSchema(loginValidationSchema), userCtrl.login)
app.get('/api/user/account',authenticateUser, userCtrl.account)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
