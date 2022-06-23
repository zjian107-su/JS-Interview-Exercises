/**
 * to create a observable from scratch
 * you nee pass in observer as the param of the call-back function
 * You may fetch information, then set the condition of next, complete and error.
 *
 * to use it
 * subscribe({next, error, complete})
 * within that object, those 3 are call-back functions
 */

import { Observable, from, of } from "rxjs";
import { map, filter } from "rxjs/operators";

//https://jsonplaceholder.typicode.com/posts

const observable = new Observable((observer) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      observer.next(data);
      observer.complete();
    })
    .catch((error) => observer.error(error));
});

/**
 * Using map operator to transform the data
 */
observable
  .pipe(map((data) => data.map((post) => ({ ...post, transformed: true }))))
  .subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log("complete"),
  });

/**
 * Using filter operator to filter the data
 */
observable.pipe(filter((data) => data.length > 1)).subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log(error),
  complete: () => console.log("complete"),
});

/**
 * Using from and of
 */
const array = [1, 2, 3, 4, 5];
const arrayObservable = from(array);

arrayObservable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Array processing complete"),
});
