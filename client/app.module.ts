import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { RouterModule } from "@angular/router";


import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

import { routing, appRoutingProviders } from "./app.routing";

import { NickNameModule }  from "./nickName-component/index";
import { ChatModule }  from "./chat-component/index";


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, RouterModule, RouterModule.forRoot(appRoutes), NickNameModule, ChatModule],
  declarations: [ AppComponent ],
  providers: 	[ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
