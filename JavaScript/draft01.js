function Parent() {}
Parent.prototype.value = 42;

function Child() {}
Child.prototype = new Parent();

const obj = new Child();
console.log(obj.value); // What does this log?
