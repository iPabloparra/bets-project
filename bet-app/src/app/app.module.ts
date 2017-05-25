import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

import { OddService } from './odd.service';
import { TicketService } from './ticket.service';
import { SessionService } from "./session.service";

import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { AuthComponent } from './auth/auth.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LeftBarComponent,
    MainBarComponent,
    RightBarComponent,
    AuthComponent,
    TicketsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OddService, TicketService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
