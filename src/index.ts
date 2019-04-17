import { Monado } from "./Monado";
import { MonadoArray } from "./MonadoArray";

console.log(
    new Monado(5).bind((value) => {
        return new Monado(6).bind((value2) => {
            return new Monado(value + value2)
        })
    }).value);

console.log(new MonadoArray([1, 2, 3, 4, 5]).map(x => x * 2).array);