class Vertice {
    private _symbol: string;
    private _left: Vertice;
    private _right: Vertice;
    private _counter: number;

    constructor(symbol = '', left = null, right = null, counter = 0) {
        this._symbol = symbol;
        this._left = left;
        this._right = right;
        this._counter = counter;
    }

    private isLeaf(): boolean {
        return this._left == null && this._right == null;
    }

    public frequency(): number {
        if (this.isLeaf())
            return this._counter;
        return this._left.frequency() + this._right.frequency();
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


    public addToMap(map: Map<string, string>, path: string): void {
        if (this.isLeaf()) {
            map.set(this.symbol(), path);
            return
        } else {
            this._left.addToMap(map, path = path + '0')
            this._right.addToMap(map, path = path + '1')
        }
    }

}