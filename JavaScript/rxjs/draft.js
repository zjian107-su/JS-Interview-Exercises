import { from } from "rxjs";
import { map } from "rxjs/operators";

const numbers$ = from([1, 2, 3, 4]);
const squared$ = numbers$.pipe(map((x) => x * x));
squared$.subscribe((val) => console.log(val)); // will log 1, 4, 9, 16, but asynchronously
