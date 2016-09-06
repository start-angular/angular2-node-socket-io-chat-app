"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var globalVars = require("../service/global");
var core_2 = require("@angular/core");
require("/socket.io/socket.io.js");
/// <reference path="../../typings/jquery/jquery.d.ts" />
var NickNameComponent = (function () {
    function NickNameComponent(router) {
        this.nickname = null;
        this.router = router;
    }
    NickNameComponent.prototype.submit = function (data) {
        this.nickname = data.value;
        if (this.nickname) {
            globalVars.socket = io({ query: "userName=" + this.nickname });
            this.router.navigate(["chat"]);
        }
    };
    NickNameComponent.prototype.addNickname = function ($event, nickname) {
        if ($event.which === 13) {
            this.submit(nickname);
        }
    };
    NickNameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "nick-name",
            templateUrl: "nickName.component.html"
        }),
        __param(0, core_2.Inject(router_1.Router))
    ], NickNameComponent);
    return NickNameComponent;
}());
exports.NickNameComponent = NickNameComponent;
