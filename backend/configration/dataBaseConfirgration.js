const package=require('../package.json')

const mongoose=require('mongoose')

mongoose.set('strictQuery', true);
 
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true},(error,connection)=>{
    if(!error){
      console.log('mongodb connected')
        console.log("Your app have following Dependenties")
      for(let dependencies in package.dependencies)
      
      console.log(dependencies)
    }
    else
    console.log('MongoDb is not connected'+error)
})