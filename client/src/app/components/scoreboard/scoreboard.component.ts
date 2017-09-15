import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
    selector: 'scoreboard-ss',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {

	room: string
	data;

	constructor(
		private socketService: SocketService,
		private route: ActivatedRoute
	){
		this.route.params.subscribe( params => this.setup(params['room']));
	}


	async ngOnInit(){
		console.log("init");
	}

	setup(room){
		this.socketService.enterRoom(room);
		this.socketService.getMesssage()
			.subscribe(data => {
				console.log(data);
				this.data = data;
			});
	}

}