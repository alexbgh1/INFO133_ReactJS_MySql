const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// THIS ALLOW USING FRONT AND END
app.use(cors());
app.use(express.json());

// Setting database, dots
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'info133_dots'
});

// API END POINT
// POST REQUEST, THIS IS GOING TO INSERT INFO IN TO OUR DATABASE 'info133_dots'
// localhost:3001/create
app.post('/create', (req, res) => {
    const name = req.body.name;
    const size = req.body.size;
    const color = req.body.color;
    
    db.query(
        'INSERT INTO dots (name,size,color) VALUES (?,?,?)',
        [name,size,color],
        (err, result) => {
        if(err) {console.log(err)}
        else{
            res.send('Values Inserted')
        }
        }
    );

})

app.listen(3001, () =>{
    console.log('its working');
});