import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class SocketService {

    constructor(private socket: Socket) { }

    enterRoom(room: string, type: string){
        this.socket.emit("subscribe", {room: room, type: type});
    }


    leaveRoom(room: string, type: string){
        this.socket.emit("unsubscribe", {room: room, type: type});
    }
    
    sendMessage(room,data) {
        data.room = room;
        this.socket.emit("message", data);
    }
    
    sendMessagePrize(room,data) {
        data.room = room;
        this.socket.emit("prize", data);
    }
    
    sendMessageTime(room,data) {
        data.room = room;
        this.socket.emit("time", data);
    }
    
    sendMessageImg(room,data) {
    	data.room = room;
    	this.socket.emit("img", data);
    }

    getMesssage(channel){
    	return this.socket
            .fromEvent<any>(channel);
    }
}