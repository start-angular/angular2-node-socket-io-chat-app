import { NgModule }      from "@angular/core";
import {RouterModule}	from "@angular/router";
import { CommonModule } from "@angular/common";
import { NickNameComponent }  from "./nickName.component";

@NgModule({
    imports:      [ CommonModule, RouterModule],
    declarations: [ NickNameComponent ],
    exports: 	  [ NickNameComponent ]
})

export class NickNameModule {}
