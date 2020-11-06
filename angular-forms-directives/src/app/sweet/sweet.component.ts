import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';

@Component({
    selector: 'app-sweet',
    templateUrl: './sweet.component.html',
    styleUrls: ['./sweet.component.css']
})

export class SweetComponent implements OnInit {

    @Input() compact: boolean;

    allSweets: Food[] = [
        new Food("Cinnamon Rolls", "../assets/images/cinnamon-rolls.jpg", 1.99, 20),
        new Food("Monster Cookies", "../assets/images/monster-cookies.jpg", 1.49, 15),
        new Food("Divinity", "../assets/images/divinity.jpg", 0.79, 8),
        new Food("Gooey Fudge", "../assets/images/mallow-fudge.jpg", 0.99, 10)
    ];

    constructor() { }

    ngOnInit() {
    }

}
