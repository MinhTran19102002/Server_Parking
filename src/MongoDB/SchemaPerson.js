const mongoose = require('mongoose')
const validator = require('validator')

const personSchema = mongoose.Schema(
    {
        _id : { 
            type : mongoose.Types.ObjectId 
        },
        name:{
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        },
        phone:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true,
            validator(value){
                if(!validator.isEmail(value))
                    throw new Error('It shoul be an email')
            }
        }
    }
)

const Person = mongoose.model('Person',personSchema);

module.exports = Person;