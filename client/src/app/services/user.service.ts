import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/Rx'


interface loginResponse {
  success: boolean;
  token: String;
  item: UserInterface;
}

export interface UserInterface{
	name: String;
	email: string;
}

@Injectable()
export class UserService {

	user: UserInterface;

	constructor(private http: HttpClient){}

	getToken(): String {
		return localStorage.getItem("token");
	}

	removeToken(): Boolean {
		localStorage.removeItem("token");
		return true;
	}

	setToken(token): Boolean {
		localStorage.setItem("token",token);
		return true;
	}

	async me(): Promise<UserInterface> {

		let user: UserInterface = { name: "", email: ""};

		return user;


		// if(!this.getToken()){
		// 	return await Observable.of(undefined).toPromise();
		// }

		// if(this.user){
		// 	user = await Observable.of(this.user).toPromise();
		// }else{
		// 	user = await this.http.get<loginResponse>(environment.api+"/v1/me")
		// 	.toPromise()
		// 	.then(response => {
		// 		this.user = response.item;
		// 		return this.user;
		// 	})
		// 	.catch(err => {
		// 		return undefined;
		// 	});

		// }

		// return user;

	}

	async doLogin(email, password){

		if(this.user){
			return await Observable.of(true).toPromise();
		}

		let	
			body = { email: email, password: password };

		return await this.http.post<loginResponse>(environment.api+"/v1/login",body)
			.toPromise()
			.then(result => {
				if(result.success){
					return this.setToken(result.token);
				}
				return false;
			})
	}

	logout() {
		delete this.user;
		return this.removeToken();
	}

}