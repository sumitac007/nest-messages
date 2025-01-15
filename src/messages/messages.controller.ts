import { Controller, Get, Post, Param, Body, Header, Headers, Query, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';


@Controller('/messages')
export class MessagesController {
  
  constructor(public messageService: MessageService) {}
  // messageService: MessageService;

  // constructor() {
  //   this.messageService = new MessageService();
  // }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message =  await this.messageService.findOne(id);
    if(!message) {
      throw new NotFoundException('mnessage not found')
    }
    return message;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto){
    return this.messageService.create(body.content);
  } 
}
