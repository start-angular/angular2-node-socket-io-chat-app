import {Router, RouterConfig, Routes} from "@angular/router";

import {NickNameComponent} from "./nickName.component";

import * as myGlobal from "../service/global";

export const nickNameRoutes: Routes = [
    { path: '', component: NickNameComponent }
];