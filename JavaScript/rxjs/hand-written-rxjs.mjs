/**
 * to create a observable from scratch
 * you nee pass in observer as the param of the call-back function
 * You may fetch information, then set the condition of next, complete and error.
 *
 * to use it
 * subscribe({next, error, complete})
 * within that object, those 3 are call-back functions
 */

import { Observable } from "rxjs";

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

observable.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log(error),
  complete: () => console.log("complete"),
});
