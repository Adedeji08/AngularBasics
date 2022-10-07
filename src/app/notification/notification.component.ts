/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/10/2022 - 17:15:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/10/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class='alert alert-success' [hidden]='displayNotification'>
             <p>This website use cookies to provide user better experience</p>
             <div class='close'><button class='btn' (click)="closeNotification()">X</button></div>
             </div>`,
  styles: [`.notif-div {margin: 10px 0px;
          padding: 10px 20px; background-color: #FAD7A0; 
          text-align: center}`, 
          "p{font-size: 14px}",
        ".close{float:right; margin-top: -45px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    displayNotification: boolean = false;

    closeNotification(){
      this.displayNotification = true;
    }
}
