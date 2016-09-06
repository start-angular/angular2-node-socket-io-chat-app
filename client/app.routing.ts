import { Routes, RouterModule, provideRouter } from "@angular/router";

import { nickNameRoutes }  from "./nickName-component/index";

import { chatComponentRoutes }  from "./chat-component/index";

import {ModuleWithProviders} from "@angular/core";

export const appRoutes: Routes = [
    ...nickNameRoutes,
    ...chatComponentRoutes
];

export const appRoutingProviders: any[] = [ provideRouter(appRoutes) ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
