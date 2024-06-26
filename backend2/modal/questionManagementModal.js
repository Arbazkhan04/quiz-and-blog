const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    quize: [
        {
            subject: {
                type: String,
                required: true
            },
            organization: {
                type: String,
                required: true
            },
            setName: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            alternatives: [
                {
                    text: {
                        type: String,
                        required: true
                    },
                    isCorrect: {
                        type: Boolean,
                        required: true,
                        default: false
                    }
                }
            ],
            softDelete: {
                type: Number,
                default: 0
            }
        }
    ],

})

module.exports = mongoose.model('Question', QuestionSchema)
