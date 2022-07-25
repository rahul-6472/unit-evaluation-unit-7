const mongoose = require ('mongoose')

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:{
        type:String,
        select:false
    }
}
)

let User = mongoose.model('User', userSchema)

module.exports = User