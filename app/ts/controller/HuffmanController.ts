class Huffmancontroller {

    private _textField: HTMLInputElement;
    private _huffman: Huffmen;

    constructor() {
        this._textField = document.querySelector('#text');
        this._huffman = new Huffmen();
    }

    encode(event: Event) {
        event.preventDefault();
        this._textField.value = this._huffman.encode(this._textField.value);
    }

    decode(event: Event) {
        event.preventDefault();
    }

    clear() {
        this._textField.value = '';
    }
}