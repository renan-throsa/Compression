class Huffmancontroller {
    constructor() {
        this._textField = document.querySelector('#text');
        this._huffman = new Huffmen();
    }
    encode(event) {
        event.preventDefault();
        this._textField.value = this._huffman.encode(this._textField.value);
    }
    decode(event) {
        event.preventDefault();
    }
    clear() {
        this._textField.value = '';
    }
}
