const express = require('express')
const app = express()
const port = 3000
const db = require('./sql')

// app config
app.listen(port, () => console.log(`Listening to port: ${port}`));

// Root endpoint
app.get('/', (req, res, next) => {
    res.json({"message":"Ok"});
    next();
})

app.get('/service', (req, res) => {
        var sql = "SELECT * FROM service"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                return res.status(404).json("err:", err.message);
            }
            res.json({
                "message": "success",
                "data": rows
        });
    });
});

app.get('/service/:id', (req, res) => {
    var sql = "SELECT * FROM service where ServiceId = ?"
    var params = [req.params.id]
    db.all(sql, params, (err, rows) => {
        if (err){
            return res.status(400).json({"error": err.message});
        }
        res.json({
            "message": "success",
            "data": rows
        });
    })
});

// Default response for any other request
app.use((req, res) => {
    res.status(400);
});
