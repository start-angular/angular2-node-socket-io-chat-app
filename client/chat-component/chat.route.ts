import {Router, Routes} from "@angular/router";

import {ChatComponent} from "./chat.component";

import * as myGlobal from "../service/global";


export const chatComponentRoutes: Routes = [
    { path: 'chat', component: ChatComponent }
];