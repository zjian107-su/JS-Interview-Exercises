// a decorator can be seen under
function component(target) {
  Object.defineProperty(target.prototype, "course", {
    value: () => "Angular 2",
  });
}
