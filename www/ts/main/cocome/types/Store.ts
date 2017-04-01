/**
 * Created by Joshua on 27.02.2017.
 */

export class Store {

    private id:number;
    private name:String;
    private location:String;

    constructor(id:number,name:string,location:String)
    {
        this.id = id;
        this.name = name;
        this.location = location;
    }

    public getName(): String {
        return this.name;
    }

    public updateData(data:any):Store {
        this.id = data.id;
        this.name = data.name;
        this.location = data.location;
        return this;
    }
}