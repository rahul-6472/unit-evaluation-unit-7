const express = require('express')
const connectDatabase = require('./Database')
const notesRouter = require('./Routes/notes')
const userRouter = require('./Routes/user')

const app = express()

app.use(express.json())

app.use(notesRouter)
app.use(userRouter)

connectDatabase().then(()=>{
    app.listen(3001, () =>{
        console.log("server is running at http://localhost:3001")
    })
})