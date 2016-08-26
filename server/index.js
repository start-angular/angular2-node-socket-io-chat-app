"use strict";
let express = require("express");
var path = require('path');
let chat_app = require('express')();
let http = require('http').Server(chat_app);
let io = require('socket.io')(http);


chat_app.use(express.static(__dirname, '/'));

chat_app.use(express.static(__dirname, '/server/'));
chat_app.use(express.static(__dirname + "/..", '/client/'));
chat_app.use(express.static(__dirname + '/node_modules'));

chat_app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log("user connected to socket : ",socket.id);
  //console.log('a user connected');
  
socket.on('disconnect', function(){
  console.log('user disconnected');
});

socket.on('chatMessageToSocketServer', function(msg){
  console.log('user sent message : '+msg);
  io.emit('broadcastToAll_chatMessage', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});