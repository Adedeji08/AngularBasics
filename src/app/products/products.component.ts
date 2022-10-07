/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 07/10/2022 - 16:45:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'black', available: 'Available', image: '/assets/Product_Photography.jpeg'},
    {id:2, name: 'Minimalists Analog Watch', price: '109', color: 'black', available: 'Not Available', image: '/assets/Product_Photography.jpeg'},
    {id:3, name: 'Minimalists Analog Watch', price: '109', color: 'black', available: 'Available', image: '/assets/Product_Photography.jpeg'},
    {id:4, name: 'Minimalists Analog Watch', price: '109', color: 'black', available: 'Not Available', image: '/assets/Product_Photography.jpeg'},
    {id:5, name: 'Minimalists Analog Watch', price: '109', color: 'black', available: 'Available', image: '/assets/Product_Photography.jpeg'},
    {id:6, name: 'Minimalists Analog Watch', price: '109', color: 'black', available: 'Available', image: '/assets/Product_Photography.jpeg'},
   ]
}
