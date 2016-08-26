"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { OnInit } from '@angular/core';
require("/socket.io/socket.io.js");
require("http://code.jquery.com/jquery-1.11.1.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 Working!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  \t\t\t\n\n  \t\t\t"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var socket = io();
$('form').submit(function () {
    socket.emit('chatMessageToSocketServer', $('#message-box').val());
    $('#message-box').val('');
    return false;
});
socket.on('broadcastToAll_chatMessage', function (msg) {
    $('#messages').append($('<li>').text(msg));
});
