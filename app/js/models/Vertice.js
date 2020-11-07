class Vertice {
    constructor(symbol = '', left = null, right = null, counter = 0) {
        this._symbol = symbol;
        this._left = left;
        this._right = right;
        this._counter = counter;
    }
    isLeaf() {
        return this._left == null && this._right == null;
    }
    frequency() {
        if (this.isLeaf())
            return this._counter;
        return this._left.frequency() + this._right.frequency();
    }
    symbol() {
        return this._symbol;
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
    addToMap(map, path) {
        if (this.isLeaf()) {
            map.set(this.symbol(), path);
            return;
        }
        else {
            this._left.addToMap(map, path = path + '0');
            this._right.addToMap(map, path = path + '1');
        }
    }
}
