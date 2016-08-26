import { Component } from '@angular/core';
//import { OnInit } from '@angular/core';

import "/socket.io/socket.io.js"
import  "http://code.jquery.com/jquery-1.11.1.js";


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>`
})
export class AppComponent { 
  title = 'Angular 2 Working!';
  var socket = io();
  //io.connect();
  $('form').submit(function(){
    socket.emit('chatMessageToSocketServer', $('#message-box').val());
    $('#message-box').val('');
    return false;
  });

  socket.on('broadcastToAll_chatMessage', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
}


