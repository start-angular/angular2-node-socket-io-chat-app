"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var app_routing_2 = require("./app.routing");
var index_1 = require("./nickname/index");
var index_2 = require("./chat-component/index");
// import { NicknameComponent }  from './app.nicknameComponent';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_2.routing, router_1.RouterModule, router_1.RouterModule.forRoot(app_routing_1.appRoutes), index_1.NickNameModule, index_2.ChatModule],
            declarations: [app_component_1.AppComponent],
            providers: [app_routing_2.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
