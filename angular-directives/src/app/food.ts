export class Food {

    name: string;
    imgURL: string;
    priceEach: number;
    pricePerDozen: number;

    constructor(name: string, imgURL: string, priceEach: number, pricePerDozen: number = null) {
        this.name = name;
        this.imgURL = imgURL;
        this.priceEach = priceEach;
        this.pricePerDozen = pricePerDozen;
    }

}
