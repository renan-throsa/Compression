class Huffman {
    countUpFrequencies(text) {
        let dict = {};
        let queue = Array();
        for (let i = 0; i < text.length; i++) {
            let ch = text[i];
            if (!dict[ch]) {
                dict[ch] = new Vertice(ch);
                queue.push(dict[ch]);
                dict[ch].increment();
            }
            else {
                dict[ch].increment();
            }
        }
        return queue.sort((x, y) => x.frequency() - y.frequency()).reverse();
    }
    buildTree(queue) {
        while (true) {
            let left = queue.pop();
            let rigth = queue.pop();
            let parent = new Vertice('Null', left, rigth);
            if (queue.length === 0) {
                return parent;
            }
            else {
                queue.push(parent);
                queue = queue.sort((x, y) => x.frequency() - y.frequency()).reverse();
            }
        }
    }
    buildMap() {
        let dict = {};
        let path = '';
        this._root.addToMap(dict, path);
        return dict;
    }
    encode(text) {
        this._root = this.buildTree(this.countUpFrequencies(text));
        let dict = this.buildMap();
        let data = '';
        for (let index = 0; index < text.length; index++) {
            let ch = text[index];
            data = data + dict[ch];
        }
        return data;
    }
    decode(data) {
        let text = '';
        let current = this._root;
        for (let index = 0; index < data.length; index++) {
            let ch = data[index];
            if (ch === '0') {
                current = current.left();
            }
            else {
                current = current.right();
            }
            if (current.isLeaf()) {
                text = text + current.symbol();
                current = this._root;
            }
        }
        return text;
    }
}
