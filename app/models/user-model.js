const {Schema,model} = require ('mongoose')
const userSchema = new Schema({
    userName:String,
    email:String,
    password:String,
    role:String
})
const User = model( 'User',userSchema) 
module.exports=User;