const mongoose = require('mongoose');


//user model => field and attributes like email , password


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the name of the student'],
        unique: [true, 'Email Exist']
    },
    age: {
        type: String,
        required: [true, 'Please provide age of the student'],
        unique: false,
    },
    grade : {
        type : String,
        required: [true, 'Please provide grade information'],

    }
})

//export UserSchema

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
