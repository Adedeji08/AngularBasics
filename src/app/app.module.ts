/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/09/2022 - 17:09:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/09/2022
    * - Author          : 
    * - Modification    : 
**/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { containerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    containerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
