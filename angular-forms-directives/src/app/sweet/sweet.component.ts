import { Component, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
    selector: 'app-sweet',
    templateUrl: './sweet.component.html',
    styleUrls: ['./sweet.component.css']
})
export class SweetComponent implements OnInit {

    allSweets: Food[] = [
        new Food("Cinnamon Rolls", "../assets/images/cinnamon-rolls.jpg", 1.99, 20),
        new Food("Monster Cookies", "../assets/images/monster-cookies.jpg", 1.59, 15),
        new Food("Divinity", "../assets/images/divinity.jpg", 0.99, 10)
    ];

    constructor() { }

    ngOnInit() {
    }

}
