const mongoose = require ('mongoose')

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    note:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    }
})

const Note = mongoose.model('Note',notesSchema)

module.exports = Note