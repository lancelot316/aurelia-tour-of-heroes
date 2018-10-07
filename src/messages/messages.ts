import { MessageService } from "message-service";
import { inject } from "aurelia-framework";

@inject(MessageService)
export class Messages {
  constructor(public messageService: MessageService){}
}
