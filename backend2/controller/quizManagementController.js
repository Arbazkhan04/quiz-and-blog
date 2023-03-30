const quizModal = require('../modal/questionManagementModal')

const createQuiz = async (req, res) => {
    try {
      const { quize } = req.body;//when you are making a new doumetn you have to pass quize arrray with obejct but in updagtequzie you have to jsut pass the obejct
      const docToCreate = new quizModal({ quize });
      const docToSave = await docToCreate.save();
  
      res.json({
        Message: `Your Data is saved Successfully`,
        Body: docToSave,
        Data: true
      });
    } catch (error) {
      console.log(error);
      res.json({
        Message: error.message,
        Result: null,
        Data: false
      });
    }
  };

const getAllQuestion = async (req, res) => {
    try {
        docToGet = await quizModal.find();
        res.json({
            Message: `Your Data is saved Successfully`,          // when u get data from frontend then use this....
            Body: docToGet,
            Data: true
        })
    } catch (error) {
        console.log(error);
        res.json({
            Message: error.message,
            Result: null,
            Data: false
        });
    }
}
const getQuestionById = async (req, res) => {                           // stop there ✋✋✋        // frontend get api first create (getDocumentById) and export it through destrcut
    try {
        const ID = req.params.id;  //controller Id and router Id getDoucmentById/:Id should match 
        const docToFind = await quizModal.findOne({ _id: ID })
        res.json({
            Message: "Data Found", //we will update data on post request 
            Data: true,
            Result: docToFind
        })
    }
    catch (error) {
        res.json({
            Message: error.message,
            Result: null,
            Data: false
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

//appending more objects into the same array - start

const appendQuiz = async (req, res) => {
  try {
    const ID = req.params.id;
    const newQuestion = req.body;

    const docToUpdate = await quizModal.findOneAndUpdate(
      { _id: ID },
      { $addToSet: { quize: newQuestion } },
      { new: true, upsert: true } //upsert will add newId automaticllay if the ito the array obejct
    ).lean();

    res.json({
      Message: `Document has been updated`,
      Result: docToUpdate,
      Data: true
    });
  } catch (error) {
    res.json({
      Message: error.message,
      Result: null,
      Data: false
    });
  }
};

//appending more objects into the same array - end

// updateQuiz when objectId and documentid  met start

const updateQuiz = async (req, res) => {
  try {
    const ID = req.params.id;
    const ObjectId = req.params.objectId;
    const newQuestion = req.body;
    const query = { _id: ID, "quize._id": ObjectId };
    const update = { $set: { "quize.$": newQuestion } };
    const options = { new: true };

    const docToUpdate = await quizModal.findOneAndUpdate(
      query,
      update,
      options
    ).lean();

    res.json({
      Message: `Document has been updated`,
      Result: docToUpdate,
      Data: true
    });
  } catch (error) {
    res.json({
      Message: error.message,
      Result: null,
      Data: false
    });
  }
};

// updateQuiz when objectId and documentid end





const DeleteProductById = async (req, res) => {
    try {
        const ID = req.params.id
        const DocToDelete = await quizModal.updateOne(
            { _id: ID },
            { $set: { softDelete: 1 } }
        );
        res.json({
            Message: 'Document has been Deleted',
            Data: true,
            Result: DocToDelete
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Result: null,
            Data: false
        })
    }
}

module.exports = {
    createQuiz,
    getAllQuestion,
    getQuestionById,
    appendQuiz,
    updateQuiz,
    DeleteProductById
}