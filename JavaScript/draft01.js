a = "daniel";
b = "karthus";
c = "robyn";

res = `${a}, ${b}, ${c}`;
console.log(res);

myFunc = function () {
  a = "daniel";
  b = "karthus";
  c = "robyn";
  res = `${a}, ${b}, ${c}`;
  return res;
};

myFunc();
