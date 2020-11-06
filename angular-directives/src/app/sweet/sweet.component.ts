import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';

@Component({
    selector: 'app-sweet',
    templateUrl: './sweet.component.html',
    styleUrls: ['./sweet.component.css']
})

export class SweetComponent implements OnInit {

    @Input() compact: boolean; // this is changed in the app component

    allSweets: Food[] = [
        // Notice some of these don't use the optional last parameter, pricePerDozen
        new Food("Cinnamon Rolls", "../assets/images/cinnamon-rolls.jpg", 1.99, 20),
        new Food("Monster Cookies", "../assets/images/monster-cookies.jpg", 1.49, 15),
        new Food("Biscuits with Pear Preserves", "../assets/images/pear-preserves.jpg", 2.99),
        new Food("Gooey Fudge", "../assets/images/mallow-fudge.jpg", 0.99, 10),
        new Food("Coconut Cake", "../assets/images/coconut-cake.jpg", 3.49),
        new Food("Divinity", "../assets/images/divinity.jpg", 0.79, 8)
    ];

    constructor() { }

    ngOnInit() {
    }

}
