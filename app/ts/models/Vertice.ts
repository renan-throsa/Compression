class Vertice {
    private _symbol: string;
    private _left: Vertice;
    private _right: Vertice;
    private _counter: number;

    constructor(symbol = 'Null', left = null, right = null, counter = 0) {
        this._symbol = symbol;
        this._left = left;
        this._right = right;
        this._counter = counter;
    }

    public isLeaf(): boolean {
        return this._left == null && this._right == null;
    }

    public frequency(): number {
        return this._counter;
    }

    public symbol(): string {
        return this._symbol;
    }

    public left(): Vertice {
        return this._left;
    }

    public right(): Vertice {
        return this._right
    }

    public increment(): void {
        this._counter += 1;
    }


    public addToMap(dict: {}, path: string): void {
        if (this.isLeaf()) {
            dict[this.symbol()] = path;
            return
        } else {
            this._left.addToMap(dict, path = path + '0')
            this._right.addToMap(dict, path = path + '1')
        }
    }

}