"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./nickname/index");
var index_2 = require("./chat-component/index");
exports.appRoutes = index_1.nickNameRoutes.concat(index_2.chatComponentRoutes);
exports.appRoutingProviders = [router_1.provideRouter(exports.appRoutes)];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
