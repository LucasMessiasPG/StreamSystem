import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserInterface } from './interfaces/user.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    login = {};
    user: UserInterface;

    constructor(private userService: UserService){}

    ngOnInit(){
        this.me();
    }

    async me() {
        // this.user = await this.userService.me();
    }

    async onSubmit(login){
        await this.userService.doLogin(login.email,login.password);
        await this.me();
    }

    logout() {
        this.userService.logout();
        this.me();
    }

}