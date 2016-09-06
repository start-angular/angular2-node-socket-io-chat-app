import { Component } from "@angular/core";
import { Router }    from "@angular/router";
import * as globalVars from "../service/global";
import {Inject} from "@angular/core";
import "/socket.io/socket.io.js";
/// <reference path="../../typings/jquery/jquery.d.ts" />


@Component({
    moduleId: module.id,
    selector: "nick-name",
    templateUrl: "nickName.component.html"
})

export class NickNameComponent {
    nickname: string = null;
    protected router;

    constructor( @Inject(Router) router: Router) {
        this.router = router;
    }

    submit(data) {
      this.nickname = data.value;
      if (this.nickname) {
        globalVars.socket = io({ query: "userName=" + this.nickname });
        this.router.navigate(["chat"]);
      }
    }

    addNickname($event, nickname) {
      if ($event.which === 13) { // ENTER_KEY
        this.submit(nickname);
      }
    }
}