import { Component, Input, Output } from '@angular/core';
import { Product } from '../../model/product.class';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!:Product;

constructor(){

}
}
