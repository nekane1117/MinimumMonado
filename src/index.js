class Monado {
    // コンストラクタ(returnに相当)
    constructor(value) {
        this.value = value;
    }
    // bind
    bind(monadoFunc) {
        return monadoFunc(this.value);
    }
}
console.log(new Monado(5).bind((value) => {
    return new Monado(6).bind((value2) => {
        return new Monado(value + value2);
    });
}).value);
class MonadoArray {
    // コンストラクタ(returnに相当)
    constructor(array) {
        this.array = array;
        this.array = this.array || new Array;
    }
    // bind
    bind(monadoFunc) {
        return monadoFunc(this.array);
    }
    // とりあえずmapを実装してみる
    map(callback) {
        return this.bind(array => this.mapFunc(array, new MonadoArray(), callback));
    }
    mapFunc(arr, monadoArray, callback) {
        if (!arr.length) {
            return monadoArray;
        }
        return this.mapFunc(arr.slice(1), new MonadoArray([...monadoArray.array, callback(arr[0])]), callback);
    }
}
let monadoArray = new MonadoArray([1, 2, 3, 4, 5]);
console.log(monadoArray.map(x => x * 2).array);
//# sourceMappingURL=index.js.map