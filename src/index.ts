class Monado {
    // コンストラクタ(returnに相当)
    constructor(public value: number) {
    }

    // bind
    public bind(monadoFunc: (value: number) => Monado): Monado {
        return monadoFunc(this.value);
    }
}

console.log(
    new Monado(5).bind((value) => {
        return new Monado(6).bind((value2) => {
            return new Monado(value + value2)
        })
    }).value);

class MonadoArray {
    // コンストラクタ(returnに相当)
    constructor(public array?: Array<any>) {
        this.array = this.array || new Array;
    }

    // bind
    public bind(monadoFunc: (value: Array<any>) => MonadoArray): MonadoArray {
        return monadoFunc(this.array);
    }

    // とりあえずmapを実装してみる
    public map(callback: (value: number) => any): MonadoArray {
        return this.bind(array => this.mapFunc(array, new MonadoArray(), callback));
    }

    private mapFunc(arr: Array<any>, monadoArray: MonadoArray, callback: (value: number) => MonadoArray) {
        if (!arr.length) {
            return monadoArray;
        }
        return this.mapFunc(arr.slice(1), new MonadoArray([...monadoArray.array, callback(arr[0])]), callback);
    }
}

let monadoArray = new MonadoArray([1, 2, 3, 4, 5])
console.log(monadoArray.map(x => x * 2).array);