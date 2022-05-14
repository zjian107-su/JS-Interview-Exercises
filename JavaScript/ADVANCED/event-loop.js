/**
 * Event loop is a mechanism that enables javascript's asynchronous programming.
 * Javascript executes in a single-threaded environment. Only one block of code can execute at a time.
 *
 * Event loop continously monitor the call stack aand the message queue data structure. While call stack is empty, message queue tasks will be executed.
 *
 * Within the message queue, there are two kind of tasks. Macro and Micro. Micro has higher priority than macro.
 *
 * Micro example: Promise
 *
 * Macro example: setTimeOut()
 */

console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");

/** Result:
 * start
 * end
 * Promise
 * setTimeout
 */
