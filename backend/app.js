const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const app = express()
const bodyParser = require('body-parser');

require('dotenv').config()

const transactionRoutes = require('./routes/transactions');

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.use(bodyParser.json())
//routes
app.use('/api/v1', transactionRoutes);

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()