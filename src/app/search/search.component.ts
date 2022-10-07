/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 05/10/2022 - 15:19:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue: string = '';

  changeSearchValue(eventData: Event){
  // console.log('jejejejjejeje',(<HTMLInputElement> eventData.target).value)
   this.searchValue = (<HTMLInputElement> eventData.target).value
  }
}  
