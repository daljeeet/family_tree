import mongoose from "mongoose"
let isconnected = false
export const connectToDb = async()=>{
    mongoose.set("strictQuery",true)
    if(isconnected){
        console.log("connected to DB")
    }else{
        try{
            await mongoose.connect(`${process.env.MONGO_URI}`,{dbName:'shared_prompt'})
             isconnected = true
        }catch(err){
            console.log('error while connecting to db',err)
        }
    }
}