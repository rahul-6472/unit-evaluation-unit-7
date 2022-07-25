const mongoose = require('mongoose')

async function connectDatabase () {

    const dbUri = "mongodb://localhost:27017/notes"

    try {
        await mongoose.connect(dbUri)
        console.log("database connection succesfull")
    } catch (ex) {
        console.log("error in initating in database", ex.message)
        throw ex
    }

}

module.exports = connectDatabase