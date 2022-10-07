/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/09/2022 - 17:46:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/09/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   slogan: string = 'Your one stop shop for everything.';
   source: string = '/assets/Product_Photography.jpeg'
   getSlogan(){
    return 'This is a new slogan for this web application'
   }
}
