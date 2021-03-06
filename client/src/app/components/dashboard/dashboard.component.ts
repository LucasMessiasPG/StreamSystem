import { Component, OnInit } from '@angular/core';
import { UserService, UserInterface } from '../../services/user.service';
import { SocketService } from '../../services/socket.service';
import SHA256 from 'crypto-js/sha256';

@Component({
    selector: 'dashboard-ss',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

	user: UserInterface;
	room: string
	data;

	constructor(private userService: UserService, private socketService: SocketService){}


	async ngOnInit(){
		this.user = await this.userService.me();
		this.room = localStorage.getItem("room");
		if(this.room){
			this.enter(this.room);
		}
	}

	create(){
		let
			room = SHA256(new Date().getTime()+"").toString();
		this.enter(room);
	}

	enter(room){
		this.room = room
		this.socketService.enterRoom(room,"dashboard");
		localStorage.setItem("room",room);
	}

	disconect(){
		this.socketService.leaveRoom(this.room, "dashboard");
		localStorage.removeItem("room");
		delete this.room;
	}

}