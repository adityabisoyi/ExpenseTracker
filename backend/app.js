const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send("Hello")
})

const server = () => {
    app.listen(PORT, () => {
        console.log("You are on: ", PORT)
    })
}

server()