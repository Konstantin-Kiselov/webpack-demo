// ===== example 1 =====

// var length = 10;
// function fn() {
//   console.log(this.length);
// }
// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   },
// };
// obj.method(fn, true);

// ===== example 2 =====

this.value = "D";

const obj = {
  value: "A",
  methodA: () => {
    console.log(this.value);
  },
  methodB: function () {
    console.log(this.value);
  },
};

const context = {
  value: "B",
};

obj.methodA();
obj.methodB();
obj.methodA.call(context);
obj.methodB.call(context);
obj.methodA.bind({ value: "C" }).call(context);
obj.methodB.bind({ value: "E" }).call(context);

// ===== example 3 =====
