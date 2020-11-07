class Huffmancontroller {

    private _mapView: MapView
    private _textField: HTMLInputElement;
    private _huffman: Huffman;

    constructor() {
        this._textField = document.querySelector('#text');
        this._huffman = new Huffman();
        this._mapView = new MapView('#mapView')
        this._mapView.update({});
    }

    encode() {
        this._textField.value = this._huffman.encode(this._textField.value);
        this._mapView.update(this._huffman.buildMap());
    }

    decode() {
        this._textField.value = this._huffman.decode(this._textField.value);
        this._mapView.update({});
    }

    clear() {
        this._textField.value = '';
        this._mapView.update({});
    }
}