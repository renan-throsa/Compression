class Vertice {
    constructor(symbol = 'Null', left = null, right = null, counter = 0) {
        this._character = symbol;
        this._left = left;
        this._right = right;
        this._counter = counter;
    }
    isLeaf() {
        return this._left == null && this._right == null;
    }
    frequency() {
        return this._counter;
    }
    character() {
        return this._character;
    }
    left() {
        return this._left;
    }
    right() {
        return this._right;
    }
    increment() {
        this._counter += 1;
    }
    addToMap(dict, path = '') {
        if (this.isLeaf()) {
            dict[this.character()] = path;
            return;
        }
        this._left.addToMap(dict, (path = path + '0'));
        this._right.addToMap(dict, (path = path + '1'));
    }
}
