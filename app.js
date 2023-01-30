var express = require('express');
var bodyParser = require('body-parser');
var db= require('./connection.js');

var app = express();
app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.post('/login', function (req, res) {
    var username = req.body.username; // a valid username is admin
    var password = req.body.password; // a valid password is admin123
    var query = "SELECT username FROM User where username = '" + username + "' and password = '" + password + "'"
    console.log("username: " + username);
    console.log("password: " + password);
    console.log('query: ' + query);
    
    db.query(query , function(err, row) {

        if(err) {
            console.log('ERROR', err);
            res.redirect("/index.html#error");
        } else if (!row.length) {
            console.log(row);
            res.redirect("/index.html#unauthorized");
        } else {
            console.log(row);
            res.send('Hello <b>' + row[0].username + '</b><br /><a href="/index.html">Go back to login</a>');
        }
    });

});

app.listen(3000);