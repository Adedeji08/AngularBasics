/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/10/2022 - 18:10:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/10/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sitename: string = 'eShopping'
}
