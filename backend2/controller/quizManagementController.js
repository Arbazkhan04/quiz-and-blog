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


module.exports={
    quiz
}