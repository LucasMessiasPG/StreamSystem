import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'home-ss',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	user = {
		name: "",
		email: "",
		password: "",
		password2: ""
	};

	error;
	success;

	constructor(
		private http: HttpClient
	){}


	ngOnInit(){
	}

	register(user){
		this.error = "";

		let
			err = [];
		if(!user.name){
			err.push("name is required");
		}
		if(!user.email){
			err.push("email is required");
		}
		if(!user.password){
			err.push("password is required");
		}
		if(!user.password2){
			err.push("retry password is required");
		}
		if(user.password !== user.password2){
			err.push("password not match");
		}

		if(err.length){
			this.error = err.join(", ");
		}else{
			delete user.password2;
			this.http.post<any>(environment.api+"/v1/user",user)
			.toPromise()
			.then(result => {
				if(result.success){
					this.user = {
						name: "",
						email: "",
						password: "",
						password2: ""
					};
					this.success = result.message;
				}else{
					this.error = result.message;
				}
			})
			.catch(err => {
				if(err.error){
					this.error = err.error.message;
				}else{
					this.error = err.message;
				}
			})
		}
	}

}