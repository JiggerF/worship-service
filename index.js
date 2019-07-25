const express = require('express')
const app = express()
const port = 3000
const sql = require('./sql')

// app config
app.listen(port, () => console.log(`Listening to port: ${port}`))

app.get('/', (req, res) => res.send('Responding to method GET'))
app.get('/sql', (req, res) => {
    sql()
    res.send('Responding to SQL...')
})