import { Component } from "@angular/core";
import * as globalVars from "../service/global";
/// <reference path="../../typings/jquery/jquery.d.ts" />

import "/socket.io/socket.io.js";


@Component({
  moduleId: module.id,
  selector: "chat-page",
  templateUrl: "./chat.component.html"
})

export class ChatComponent {
    reference: any;
    resFlag: boolean = false;
    newUser: boolean = false;
    exitedUser: boolean = false;
    newUserName: string = null;
    exitedUserName: string = null;
    sentMessageUsername: string = null;
    response: string;
    clientsNameList: number[];
    message: string;

    constructor() {
        let reference = this;
        globalVars.socket.on("broadcastToAll_chatMessage", function(resObj) {            
            if (reference.sentMessageUsername !== resObj.name) {
                reference.message = resObj.name + ": " + resObj.msg;
                $("#messages").append($("<li>").text(reference.message));
            }
            else if (reference.sentMessageUsername === resObj.name) {
                $("#messages").append($("<li>").text(resObj.msg));
                reference.sentMessageUsername = null;
            }
        });


        globalVars.socket.on("updateSocketList", function(list){
          reference.clientsNameList = list;
        });

        globalVars.socket.on("addUserToSocketList", function(username){
            reference.newUser = true;
            reference.newUserName = username;
        });

        globalVars.socket.on("removeUserFromSocketList", function(username){
            reference.exitedUser = true;
            reference.exitedUserName = username;
        });
    }


    sendMessage(data) {
        this.resFlag = true;
        let reference = this;
        globalVars.socket.emit("chatMessageToSocketServer", data.value, function(respMsg, username){
            reference.sentMessageUsername = username;
            reference.response = respMsg;
        });
        $("#message-boxID").val(" ");
    }

    sendMessageOnEnter($event, messagebox) {
        if ($event.which === 13) { // ENTER_KEY
            this.sendMessage(messagebox);
        }
    }

    update() {
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
    }
}