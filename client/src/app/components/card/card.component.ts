import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
    selector: 'card-ss',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnDestroy {

	@Input() room: string;
	@Input() priview: boolean;

	type;
	data;

	constructor(
		private socketService: SocketService,
		private route: ActivatedRoute
	){}


	async ngOnInit(){

		if(this.room){
			this.setup(this.room, "preview");
		}else{
			this.route.params.subscribe( params => this.setup(params['room'], "card"));
		}
	}

	ngOnDestroy(){
		this.socketService.leaveRoom(this.room, this.type);
	}

	setup(room, type){

		this.room = room;
		this.type = type;

		this.socketService.enterRoom(room, type);
		
		this.socketService.getMesssage("data-img")
			.subscribe(data => {
				this.data = JSON.parse(JSON.stringify(data));
			});
	}

}