var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var notes = require('../mocks/notes.json')
var users = require('../mocks/users.json')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
    
app.use(bodyParser.json());

app.use(express.static('../public'))

app.get('/', function (req, res) {
    res.send('index.html');
})

// Récup les notes
app.get('/notes', function(req, res){
    res.send(notes)
})
// Récup les users
app.get('/users', function(req, res){
    res.send(users)
})

// Première boucle pour aller dans chacun des users
var usersLength = users.users.length
for(i=0; i<usersLength;i++){
}


app.listen(9000, function () {
    console.log("checkpoint running")
})
