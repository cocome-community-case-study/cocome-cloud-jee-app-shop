import {Service} from "../framework/Service";
/**
 * Created by Joshua on 10.02.2017.
 */

export class SearchHistoryService extends Service {
    private static readonly searchHistoryKey: string = "SearchHistory";
    private history: Array<string>;

    initService(): void {
        this.history = JSON.parse(localStorage.getItem(SearchHistoryService.searchHistoryKey));
    }

    closeService(): void {
        localStorage.setItem(SearchHistoryService.searchHistoryKey, JSON.stringify(this.history));
    }

    public addHistory(searchTerm:string)
    {
        this.history.push(searchTerm);
    }

    public getHistoryCount():number
    {
        return this.history.length;
    }

    public getLastHistoryEntry():string
    {
        return this.history[this.history.length - 1]
    }

    public getHistoryEntry( index:number):string
    {
        return this.history[index];
    }
}