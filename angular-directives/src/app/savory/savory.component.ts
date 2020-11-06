import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';

@Component({
    selector: 'app-savory',
    templateUrl: './savory.component.html',
    styleUrls: ['./savory.component.css']
})

export class SavoryComponent implements OnInit {

    

    allSavories: Food[] = [
        // Notice these don't use the optional last parameter, pricePerDozen
        new Food("Stuffed Squash", "../assets/images/stuffed-squash.jpg", 3.99),
        new Food("Collard Greens", "../assets/images/collard-greens.png", 2.49),
        new Food("Shrimp Salad", "../assets/images/shrimp-salad.jpg", 5.49),
        new Food("Mac & Cheese", "../assets/images/mac-cheese.jpg", 2.99),
        new Food("Japanese Beef", "../assets/images/japanese-beef.jpg", 9.49),
        new Food("Zipper Peas", "../assets/images/zipper-peas.jpg", 3.49)
    ];

    constructor() { }

    ngOnInit() {
    }

}
