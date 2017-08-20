var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Task = require('./api/models/model'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://root:Sajith031%40%23@test-shard-00-00-n8wq5.mongodb.net:27017,test-shard-00-01-n8wq5.mongodb.net:27017,test-shard-00-02-n8wq5.mongodb.net:27017/Test?ssl=true&replicaSet=Test-shard-0&authSource=admin'); 
mongoose.connect('mongodb://localhost:27017/tasks'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
