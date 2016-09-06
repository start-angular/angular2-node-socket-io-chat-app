import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatComponent } from "./chat.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ChatComponent],
    exports: [ChatComponent]
})

export class ChatModule { }