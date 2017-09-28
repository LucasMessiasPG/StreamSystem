import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { RoomComponent } from './components/dashboard/room/room.component';
import { HomeComponent } from './components/home/home.component';


// Services
import { UserService } from './services/user.service';
import { SocketService } from './services/socket.service';


// Interceptor
import { AuthInterceptor } from './interceptor';


// Socket
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';



const config: SocketIoConfig = { url: 'http://localhost:8081', options: { path: "/socket"} };


const appRoutes: Routes = [
  { path: 'card/:room', component: CardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scoreboard/:room', component: ScoreboardComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    DashboardComponent,
    CardComponent,
    ScoreboardComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    SocketIoModule.forRoot(config)
  ],
  providers: [
  	{
  		provide: HTTP_INTERCEPTORS,
	    useClass: AuthInterceptor,
	    multi: true,
  	},
  	UserService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
