import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
    selector: 'scoreboard-ss',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit, OnDestroy {

	@Input() room: string;
	@Input() priview: boolean;

	player1 = {
		decription: "",
		history: "",
		name: "",
		surname: "",
		deck: "",
		score: 0
	};
	player2 = {
		history: "",
		name: "",
		surname: "",
		deck: "",
		score: 0
	};
	prize1;
	prize2;
	inteval;
	status_cooldown;
	cooldown = 0;
	data = {
		prize1: this.prize1,
		prize2: this.prize2,
		player1: this.player1,
		player2: this.player2
	};
	type;
	fontSize;
	imgSize;
	fontSamllSize;
	fontScore;

	constructor(
		private socketService: SocketService,
		private route: ActivatedRoute
	){}


	async ngOnInit(){
		if(typeof this.priview === 'undefined'){
			this.fontScore = 40;
			this.fontSize = 30;
			this.fontSamllSize = 22;
			this.imgSize = 60;
			this.priview = false;
		}else{
			this.fontScore = 30;
			this.fontSize = 20;
			this.imgSize = 40;
			this.fontSamllSize = 18;
		}
		if(this.room){
			this.setup(this.room, "preview");
		}else{
			this.route.params.subscribe( params => this.setup(params['room'], "scoreboard"));
		}
	}

	ngOnDestroy(){
		this.socketService.leaveRoom(this.room, this.type);
	}

	setup(room, type){

		this.room = room;
		this.type = type;

		this.socketService.enterRoom(room, type);
		
		this.socketService.getMesssage("data")
			.subscribe(data => {
				console.log(data);
				this.data = JSON.parse(JSON.stringify(data));
			});

		this.socketService.getMesssage("data-prize")
			.subscribe(data => {
				let
					_data = JSON.parse(JSON.stringify(data));

				console.log(data);

				this.data.prize1 = _data.prize1;
				this.data.prize2 = _data.prize2;
			});

		this.socketService.getMesssage("data-time")
			.subscribe(data => {
				this.cooldown = data.value;
				if(data.status == "running"){

					if(this.inteval){
						clearInterval(this.inteval);
					}

					this.inteval = setInterval(() => {
						this.status_cooldown = false;
						this.cooldown++;
					},1000);
				}else{
					clearInterval(this.inteval);
					this.status_cooldown = true;
				}

			});
	}

	makeTime(time){
		if(time < 60){
			return "00:00:"+("0"+time).slice(-2);
		}
		let	
			hours = 0,
			minutes = 0,
			seconds = time;

		do{

			if(seconds > 0){
				seconds -= 60
				minutes++

				if(minutes >= 60){
					minutes -= 60;
					hours++;
				}

			}


		}while(60 <= seconds && seconds > 0)

		let response = (hours > 0 ? (("0"+hours).slice(-2)+":") : (""))+("0"+minutes).slice(-2)+":"+("0"+seconds).slice(-2);

		return response;
	}

}