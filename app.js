require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`Aplikasi berjalan pada port ${port}`);
})