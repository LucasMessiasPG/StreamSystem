import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
    selector: 'room-ss',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

	@Input() room: string;
	@Output() leave = new EventEmitter();

	data;

	constructor(private socketService: SocketService){}


	ngOnInit(){
		this.socketService.getMesssage()
			.subscribe(data => {
				console.log(data);
				this.data = data;
			});
	}

	sendTransaction(){
		this.socketService.sendMessage(this.room, { message: new Date().toString() } )
	}

	leaveRoom(){
		this.leave.emit();
	}

}