const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();const port = process.env.PORT || 3000;

const connect = process.env.MONGODB_URI || "mongodb://localhost/pinterest"

//plug in promise liblary
mongoose.Promise = global.Promise;

mongoose.connect(connect);
mongoose.connection.on('connected', () => console.log('connected to db'))

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'dist')));

//setting the routes
const api = require('./api')
app.use('/api', api);

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('addPic', (pic, user) => {
    io.emit('addPic', {type:'addPic', pic, user});
  });

  socket.on('deletePic', (pic) => {
    io.emit('deletePic', {type:'deletePic', pic});
  });

  socket.on('like', (pic) => {
    io.emit('like', {type:'like', pic});
  });

});

http.listen(port, () => {
  console.log('started on port ', + port);
});
