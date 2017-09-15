import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class SocketService {

    constructor(private socket: Socket) { }

    enterRoom(room: string){
    	console.log(room);
        this.socket.emit("subscribe", room);
    }


    leaveRoom(room: string){
        this.socket.emit("unsubscribe", room);
    }
    
    sendMessage(room,data) {
    	data.room = room;
    	this.socket.emit("message", data);
    }

    getMesssage(){
    	return this.socket
            .fromEvent<any>("data");
    }
}