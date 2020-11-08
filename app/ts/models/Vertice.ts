class Vertice {
    private _character: string;
    private _left: Vertice;
    private _right: Vertice;
    private _counter: number;

    constructor(symbol = 'Null', left = null, right = null, counter = 0) {
        this._character = symbol;
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

    public character(): string {
        return this._character;
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


    public addToMap(dict: {}, path: string = ''): void {
        if (this.isLeaf()) {
            dict[this.character()] = path;
            return;
        }
        this._left.addToMap(dict, (path = path + '0'));
        this._right.addToMap(dict, (path = path + '1'));
    }
}