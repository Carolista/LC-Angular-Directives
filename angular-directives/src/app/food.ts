// This class exists to give structure to each food item and make it easy to create an array of objects from the class

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
