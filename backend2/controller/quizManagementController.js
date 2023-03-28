const quizModal=require('../modal/questionManagementModal')

const quiz= async (req,res)=>{
    try {

        const {quize} = req.body
        const docToCreate= new quizModal({
            quize
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
            Message:"Data Found", //we will update data on post request 
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

    // const updateQuiz=async(req,res)=>{
    //     try {
    //         const _id = req.params.id 
    //         const { description, alternatives } = req.body
    
    //         let question = await quizModal.findOne({_id})
    
    //         if(!question){
    //             question = await quizModal.create({
    //                 description,
    //                 alternatives
    //             })    
    //             return res.status(201).json(question)
    //         }else{
    //             question.description = description
    //             question.alternatives = alternatives
    //             await question.save()
    //             return res.status(200).json(question)
    //         }
    //     } catch (error) {
    //         return res.status(500).json({"error":error})
    //     }
    // }
    const updateQuiz = async (req,res)=>{
        try {
            const ID = req.body.id;
            const PayLoad = req.body;
        
          const docToUpDate = await quizModal.updateOne(
            {_id:ID},
            PayLoad,
          )
           res.json({
            Message:`Document has been Updated`,
            Result: docToUpDate,
            data:true
           })
        } catch (error) {
            res.json({
                Message:error,
                Result: null,
                data:false
               })
        }
        }


        const DeleteProductById = async(req,res)=>{
            try {
                const ID = req.params.id
              const DocToDelete = await quizModal.updateOne(
                {_id:ID},
                {$set:{softDelete:1}}
              );
                res.json({
                    Message:'Document has been Deleted',
                    Data:true,
                    Result:DocToDelete
                })
            } catch (error) {
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
    getQuestionById,
    updateQuiz,
    DeleteProductById
}