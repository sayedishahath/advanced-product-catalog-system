const mongoose = require('mongoose')
const configureDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected...")
    }catch(err){
        res.status(500).json(err)
        console.log("error connecting to DB")
    }
}
module.exports=configureDb;