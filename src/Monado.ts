export class Monado {
    // コンストラクタ(returnに相当)
    constructor(public value: number) {
    }

    // bind
    public bind(monadoFunc: (value: number) => Monado): Monado {
        return monadoFunc(this.value);
    }
}

