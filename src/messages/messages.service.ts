import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessageService {

	constructor(public messagesRepo: MessageRepository) {}
	
	// messagesRepo: MessageRepository;

	// constructor(messagesRepo: MessageRepository) {
	// 	this.messagesRepo =  messagesRepo;
	// }

	findOne(id: string) {
		return this.messagesRepo.findOne(id)
	}

	findAll() {
		return this.messagesRepo.findAll();
	}

	create(message: string){
		return this.messagesRepo.createMessage(message)
	}
 }