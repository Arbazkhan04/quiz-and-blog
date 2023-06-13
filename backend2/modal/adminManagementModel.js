const mongoose = require('mongoose');
const bcrypt = require('bcrypt');   //secure-Password
const SaltRounds = parseInt (process.env.SALT_ROUND); //hashes and convert mix strings

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();
//Start Block Schema Creating
const AdminRegisterSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    saltString: { type:String },
    status: { type:Number, default:1 },
    createdDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{timestamps:true}) //find last login updated time


AdminRegisterSchema.pre('save', async function (next) { // (pre) means Creating Before AdminRegisterSchema provided by mongoose 1st argument is save inbuilt
    try {
        const salt = await bcrypt.genSalt(SaltRounds); //bcrypt SaltRounds
        const hashedPassword = await bcrypt.hash(this.password, salt); //bcrypt.hash take two arguments Password and Salt and then mix up and create 
        this.password = hashedPassword; // now this.Password = HashedPassword
        this.saltString = salt;         // and then this.SaltString = Salt
        next();
    } catch (error) {
        return ({
            message: error.message,
            data: false,
            result: null
        }) 
    }
});
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('AdminRegisterCollection',AdminRegisterSchema);