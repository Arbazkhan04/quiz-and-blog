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


const getOneQuestionByIDAndObjId = async (req, res) => {
  try {
    const ID = req.params.id;
    const ObjectId = req.params.objectId;

    const docToFind = await quizModal.findOne(
      { _id: ID, "quize._id": ObjectId },
      { "quize.$": 1 } // select the matched question object
    );

    res.json({
      Message: "Data Found",
      Data: true,
      Result: docToFind
    });
  } catch (error) {
    res.json({
      Message: error.message,
      Result: null,
      Data: false
    });
  }
};

//getQuestion  by organizationName-start
getQuestionByOrganztionName = async (req, res) => {
  let organzitionName = req.params.organization;
  console.log(organzitionName);
  const docToFind = await quizModal.find(
    { "quize.organization": { $eq: organzitionName } }
  );
  if (docToFind.length === 0) {
    res.json({
      Message: `Documents not  found`,
      Result: null,
      Data: false
    });
  }
  else {
    const quizObjects = [];
    for (const doc of docToFind) {
      quizObjects.push(...doc.quize);
    }
    res.json({
      Message: "Document found",
      Result: quizObjects,
      Data: true
    })
  }
};

//getQuestion  by organizationName-end

//get Question SetNumbet on the basic of subject name start
const getQuestionSetNumber = async (req, res) => {
  try {
    const subjectName = req.params.subjectName;
    const docToFind = await quizModal.find({
      "quize.subject": subjectName
    })
    res.json({
      Message: `Docement found`,
      Result: docToFind,
      Data: true
    })
  } catch (error) {
    res.json({
      Message: `Docement not found`,
      Result: null,
      Data: false
    })
  }
}
//get Question SetNumbet on the basic of subject name end

//appending more objects into the same array - start

const appendQuiz = async (req, res) => {
  try {
    const ID = req.params.id;
    const newQuestion = req.body;

    const docToUpdate = await quizModal.findOneAndUpdate(
      { _id: ID },
      { $addToSet: { quize: newQuestion } },
      { new: true, upsert: true } //upsert will add newId automaticllay if the ito the array obejct
    ).lean();//convert into plain js object

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

//find docment by organization and sunject name-start
const findDocumentByOrgAndSubjectName = async (req, res) => {
  try {
    const organzitionName = req.params.org;
    // const setNumber = req.params.set;
    const subjectName = req.params.sub;

    const docToFind = await quizModal.find({
      "quize.organization": organzitionName,
      "quize.subject": subjectName,
      // "quize.setName": setNumber,
    })
    res.json({
      Message: "document found",
      Result: docToFind,
      Data: true
    })
  } catch (error) {
    res.json({
      Message: "document not found",
      Result: null,
      Data: false
    })
  }


}
//find docment by organization and sunject name-end


//find doucment by  organization name and set numebr and subject-start
const findDocByOrganzation_SetNoAndSubjectName = async (req, res) => {
  try {
    const organzitionName = req.params.org;
    const setNumber = req.params.set;
    const subjectName = req.params.sub;

    const docToFind = await quizModal.findOne({
      "quize.organization": organzitionName,
      "quize.subject": subjectName,
      "quize.setName": setNumber,
    }, {
      // Use the $slice operator to return only the first object in the quize array
      "quize": { $slice: 1 }
    })
    res.json({
      Message: "document found",
      Result: docToFind,
      Data: true
    })
  } catch (error) {
    res.json({
      Message: "document not found",
      Result: null,
      Data: false
    })
  }


}
//find doucment by  organization name and set numebr and subject-end

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
  getOneQuestionByIDAndObjId,
  getQuestionByOrganztionName,
  getQuestionSetNumber,
  findDocumentByOrgAndSubjectName,
  findDocByOrganzation_SetNoAndSubjectName,
  appendQuiz,
  updateQuiz,
  DeleteProductById
}