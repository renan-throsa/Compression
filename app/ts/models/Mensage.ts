class Mensage {

    constructor(private _text: string = '') { }

    get text() {

        return this._text;
    }

    set text(text) {

        this._text = text;
    }
}
