export class Product {
    public price: number;
    public name: string;
    public summary: string;
    public description: string;
    public imagePath: string;

    // constructor(price: number, name: string, summary: string, description: string, imagePath: string) {
    //     this.price = price;
    //     this.name = name;
    //     this.summary = summary;
    //     this.description = description;
    //     this.imagePath = imagePath;
    // }

    constructor(price: number, name: string, summary: string, description: string, imagePath: string) {
            this.price = 25;
            this.name = "Toy";
            this.summary = "This is a new toy";
            this.description = "New toy that all the kids will love";
            this.imagePath = "https://www.walmart.com/ip/LEGO-Friends-Snow-Resort-Chalet-41323/885778683";
    }
}