/**
 * Created by Joshua on 10.02.2017.
 */

export abstract class Service
{
    constructor()
    {
        setTimeout(()=>{
            this.initService();
        });
    }

    public abstract initService():void;
    public abstract closeService():void;
}