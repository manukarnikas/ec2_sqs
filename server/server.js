const { publishMessage } = require('./controller/MessageController');
const express = require('express');
const cors = require('cors')

require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.post('/publishMessage', publishMessage );

var server = app.listen(3008, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server running at listening at http://%s:%s", host, port)
})