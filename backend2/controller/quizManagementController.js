const quizModal=require('../modal/questionManagementModal')

const quiz= async (req,res)=>{
    try {

        const { description ,alternatives} = req.body
        const docToCreate= new quizModal({
            description,
            alternatives
        })
        const docToSave= await docToCreate.save();
        
        console.log(docToSave); 
        res.json({
            Message:`Your Data is saved Successfully`,          // when u get data from frontend then use this....
            Body:docToSave,
            Data:true
        })
        
        } catch (error) {
            console.log(error);
            res.json({
                Message:error.message,
                Result:null,
                Data:false
            });
        }
}

const getAllQuestion=async (req,res)=>{
    try {
        docToGet=await quizModal.find();
        res.json({
            Message:`Your Data is saved Successfully`,          // when u get data from frontend then use this....
            Body:docToGet,
            Data:true
        })
    } catch (error) {
        console.log(error);
            res.json({
                Message:error.message,
                Result:null,
                Data:false
            });
    }
}

const getQuestionById = async (req,res)=>{                           // stop there ✋✋✋        // frontend get api first create (getDocumentById) and export it through destrcut
    try {
        const ID = req.params.id;  //controller Id and router Id getDoucmentById/:Id should match 
        const docToFind = await  quizModal.findOne({_id:ID})
        res.json({
            Message:"Data Found",
           Data:true,
           Result:docToFind
        })
    } 
    catch (error) {
        res.json({
            Message:error.message,
            Result:null,
            Data:false
           })
    }
    
    }
module.exports={
    quiz,
    getAllQuestion,
    getQuestionById
}