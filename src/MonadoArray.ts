export class MonadoArray {
    // コンストラクタ(returnに相当)
    constructor(public array?: Array<any>) {
        this.array = this.array || new Array;
    }

    // bind
    public bind(monadoFunc: (value?: Array<any>) => MonadoArray): MonadoArray {
        return monadoFunc(this.array);
    }

    // とりあえずmapを実装してみる
    public map(callback: (value: number) => any): MonadoArray {
        return this.bind((array?: Array<any>) => this.mapFunc(new MonadoArray(), callback, array));
    }

    private mapFunc(monadoArray: MonadoArray, callback: (value: number) => MonadoArray, array?: Array<any>): MonadoArray {
        if (!array || !array.length) {
            return monadoArray;
        }
        return this.mapFunc(new MonadoArray([...monadoArray.array || [], callback(array[0])]), callback, array.slice(1));
    }
}

