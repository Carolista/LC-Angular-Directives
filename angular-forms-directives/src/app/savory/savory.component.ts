import { Component, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
    selector: 'app-savory',
    templateUrl: './savory.component.html',
    styleUrls: ['./savory.component.css']
})
export class SavoryComponent implements OnInit {

    allSavories: Food[] = [
        new Food("Stuffed Squash", "../assets/images/stuffed-squash.jpg", 3.99),
        new Food("Shrimp Salad", "../assets/images/shrimp-salad.jpg", 5.49),
        new Food("Mac & Cheese", "../assets/images/mac-cheese.jpg", 2.99)
    ];

    constructor() { }

    ngOnInit() {
    }

}
