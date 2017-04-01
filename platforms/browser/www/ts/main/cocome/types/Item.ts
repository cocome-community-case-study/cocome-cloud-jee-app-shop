/**
 * Created by Joshua on 10.02.2017.
 */

export class Item
{

    private id:number;
    private name:string;
    private imageURL:string;
    private description:string;
    private price:number;
    private amount: number;


    constructor(id: number, name: string, imageURL: string, description:string, price:number, amount:number) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
        this.amount = amount;
    }

    public getID(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getImageURL(): string {
        return this.imageURL;
    }

    public getPrice(): number {
        return this.price;
    }
    public getDescription(): string {
        return this.description;
    }

    public getAmount(): number {
        return this.amount;
    }

    public updateData(data:any):Item {
        this.id = data.id;
        this.name = data.name;
        this.imageURL = data.imageURL;
        this.description = data.description;
        this.price = data.price;
        this.amount = data.amount;
        return this;
    }
}