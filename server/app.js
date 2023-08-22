const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flamDragon'
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// NEWSLETTER SQL QUERY

app.post('/newsletter', (req, res) => {

    const lastName = req.body.lastName
    const firstName = req.body.firstName
    const emailAddress = req.body.emailAddress
    const sqlNewsletterInsert = "INSERT INTO customers (last_name, first_name, email_address) VALUES (?, ?, ?)"
    db.query(sqlNewsletterInsert, [lastName, firstName, emailAddress], (err, result) => { 
        console.log(err);
        })
});

// DRUMSTICK SQL QUERY

app.get('/api/drumsticks', (req, res) => {
    const sqlDrumstick = "SELECT * FROM drumsticks";
    db.query(sqlDrumstick, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

// SERVER TEST
app.listen(3002, () => {
    console.log("Running on port 3002...")
})
