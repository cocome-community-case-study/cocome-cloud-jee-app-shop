/**
 * Created by Joshua on 23.01.2017.
 */

export class PageData {

    private _name: string;
    private _menuText: string;
    private _inMenuVisible: boolean;

    constructor(name: string, menuText: string, inMenuVisible: boolean) {
        this._name = name;
        this._menuText = menuText;
        this._inMenuVisible = inMenuVisible;
    }

    get name(): string {
        return this._name;
    }

    get menuText(): string {
        return this._menuText;
    }

    get inMenuVisible(): boolean {
        return this._inMenuVisible;
    }
}
