"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var globalVars = require("../service/global");
/// <reference path="../../typings/jquery/jquery.d.ts" />
require("/socket.io/socket.io.js");
var ChatComponent = (function () {
    function ChatComponent() {
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
        this.newUserName = null;
        this.exitedUserName = null;
        this.sentMessageUsername = null;
        var reference = this;
        globalVars.socket.on("broadcastToAll_chatMessage", function (resObj) {
            if (reference.sentMessageUsername !== resObj.name) {
                reference.message = resObj.name + ": " + resObj.msg;
                $("#messages").append($("<li>").text(reference.message));
            }
            else if (reference.sentMessageUsername === resObj.name) {
                $("#messages").append($("<li>").text(resObj.msg));
                reference.sentMessageUsername = null;
            }
        });
        globalVars.socket.on("updateSocketList", function (list) {
            reference.clientsNameList = list;
        });
        globalVars.socket.on("addUserToSocketList", function (username) {
            reference.newUser = true;
            reference.newUserName = username;
        });
        globalVars.socket.on("removeUserFromSocketList", function (username) {
            reference.exitedUser = true;
            reference.exitedUserName = username;
        });
    }
    ChatComponent.prototype.sendMessage = function (data) {
        this.resFlag = true;
        var reference = this;
        globalVars.socket.emit("chatMessageToSocketServer", data.value, function (respMsg, username) {
            reference.sentMessageUsername = username;
            reference.response = respMsg;
        });
        $("#message-boxID").val(" ");
    };
    ChatComponent.prototype.sendMessageOnEnter = function ($event, messagebox) {
        if ($event.which === 13) {
            this.sendMessage(messagebox);
        }
    };
    ChatComponent.prototype.update = function () {
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
    };
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "chat-page",
            templateUrl: "./chat.component.html"
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
