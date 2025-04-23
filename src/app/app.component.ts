import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../model/product.class';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';

  product: Product[] = [
    new Product("papier1",20,new Date('2022-11-11'), false),
    new Product("papier2",21,new Date('2022-10-12'), false),
    new Product("papier3",22,new Date('2022-09-13'), true),
    new Product("papier5",25,new Date('2022-09-23'), true),
    new Product("papier4",23,new Date('2022-08-14'), false)
  ]
}
