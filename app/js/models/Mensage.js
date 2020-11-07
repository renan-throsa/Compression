class Mensage {
    constructor(_text = '') {
        this._text = _text;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
    }
}
