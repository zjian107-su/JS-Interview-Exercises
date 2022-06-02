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
