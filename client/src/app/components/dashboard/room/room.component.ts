import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


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
	showPreveiew;
	card_name;
	inteval;
	img;
	cards;
	cooldown = 0;
	status_cooldown = true;
	player1 = {
		decription: "",
		history: "",
		name: "",
		surname: "",
		deck: "",
		score: 0
	};
	player2 = {
		decription: "",
		history: "",
		name: "",
		surname: "",
		deck: "",
		score: 0
	};
	prize1;
	prize2;
	dashboard = {
		prize1: this.prize1,
		prize2: this.prize2,
		player1: this.player1,
		player2: this.player2
	};
	url;

	constructor(
		private socketService: SocketService,
		private http: HttpClient
	){}


	ngOnInit(){
		this.url = environment.web_link + "/scoreboard/" + this.room;
		this.socketService.getMesssage("data")
			.subscribe(data => {
				if(!data.preview){
					this.dashboard = data;
				}else{
					delete data.preview;
				}

				if(!this.dashboard.prize1){
					this.dashboard.prize1 = 6
				}

				if(!this.dashboard.prize2){
					this.dashboard.prize2 = 6
				}

			});

		this.socketService.getMesssage("data-prize")
			.subscribe(data => {
				let
					_data = JSON.parse(JSON.stringify(data));

				this.dashboard.prize1 = _data.prize1;
				this.dashboard.prize2 = _data.prize2;
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

		this.socketService.getMesssage("data-img")
			.subscribe(data => {
				this.img = JSON.parse(JSON.stringify(data));
			});
	}

	sendTransaction(){
		this.socketService.sendMessage(this.room, { message: new Date().toString() } )
	}

	leaveRoom(){
		this.leave.emit();
	}

	onSubmit(data){
		this.socketService.sendMessage(this.room, data);
	}

	setPokeball(number: number, player: number){
		this.dashboard["prize"+player] = number;
		let
			_data = JSON.parse(JSON.stringify(this.dashboard));

		delete _data.player1;
		delete _data.player2;
		
		this.socketService.sendMessagePrize(this.room, _data);
	}

	startTime(){
		this.socketService.sendMessageTime(this.room, {
			value: this.cooldown,
			status: "running"
		});
	}

	resetTime(){
		this.cooldown = 0;
		this.stopTime();
	}

	stopTime(){
		this.socketService.sendMessageTime(this.room, {
			value: this.cooldown,
			status: "stop"
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

	changeScore(player, number){
		if(typeof this.dashboard["player"+player].score === 'undefined'){
			this.dashboard["player"+player].score = 0;
		}
		this.dashboard["player"+player].score += number;
		if(this.dashboard["player"+player].score < 0){
			this.dashboard["player"+player].score = 0
		}
		if(this.dashboard["player"+player].score > 9){
			this.dashboard["player"+player].score = 9;
		}
		this.socketService.sendMessage(this.room, this.dashboard);
	}

	search(name){
		console.log(name);
		this.http.get<any>("https://api.pokemontcg.io/v1/cards?name="+name)
		.toPromise()
		.then(apiResult => {
			this.cards = apiResult.cards;
		})
	}

	hideImg(){
		this.socketService.sendMessageImg(this.room, {img: "", cooldown: -1});
	}

	showImg(card, cooldown){
		if(cooldown === -1){
			this.socketService.sendMessageImg(this.room, {img: card.imageUrl, cooldown: -1});
		}else{
			this.socketService.sendMessageImg(this.room, {img: card.imageUrl, cooldown: cooldown});
		}
	}

}