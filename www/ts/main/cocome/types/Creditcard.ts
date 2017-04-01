/**
 * Created by Joshua on 09.03.2017.
 */

export class Creditcard {

    private id: number;
    private name:string;
    private pin:number;


    constructor(id: number, name: string, pin: number) {
        this.id = id;
        this.name = name;
        this.pin = pin;
    }

    public updateData(data:any):Creditcard {
        this.id = data.id;
        this.name = data.name;
        this.pin = data.pin;
        return this;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPin(): number {
        return this.pin;
    }
}