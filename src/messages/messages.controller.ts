import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {


  @Get()
  listMessages() {
    
  }

  @Get('/:id')
  getMessage() {
    
  }

  @Post()
  createMessage(){

  } 
}
