// Load the full build.
var _ = require("lodash");

// const res = _.chunk(["a", "b", "c", "d", "e", "f"], 2);
// console.log(res);

// false, null, 0, "", undefined, and NaN
// const resTwo = _.compact([0, 1, false, 2, "", 3, null, undefined, NaN]);
// console.log(resTwo);

// const resThree = _.difference([1, 2, 3], [4, 2]);
// console.log(resThree);

// console.log(_.drop([1, 2, 3]));
// => [2, 3]

// console.log(_.drop([1, 2, 3], 2));
// => [3]

// console.log(_.drop([1, 2, 3], 5));
// => []

// console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]

// console.log(_.dropRight([1, 2, 3]));
// => [1, 2]

// console.log(_.dropRight([1, 2, 3], 2));
// => [1]

// console.log(_.dropRight([1, 2, 3], 5));
// => []

// console.log(_.dropRight([1, 2, 3], 0));
// => [1, 2, 3]

// _.dropRightWhile([1, 2, 3], function (n) {
//   return n > 1;
// });
// // => [1]

// var users = [
//   { user: "barney", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];

// // using the `_.matches` callback shorthand
// _.pluck(_.dropRightWhile(users, { user: "pebbles", active: false }), "user");
// // => ['barney', 'fred']

// // using the `_.matchesProperty` callback shorthand
// _.pluck(_.dropRightWhile(users, "active", false), "user");
// // => ['barney']

// // using the `_.property` callback shorthand
// _.pluck(_.dropRightWhile(users, "active"), "user");
// // => ['barney', 'fred', 'pebbles']

// var array = [1, 2, 3];

// console.log(_.fill(array, "a"));
// console.log(array);
// => ['a', 'a', 'a']

// console.log(_.fill(Array(3), 2));
// => [2, 2, 2]

// console.log(_.fill([4, 6, 8], "*", 0, 3));
// => [4, '*', 8]

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

// console.log(
//   _.findIndex(users, function (chr) {
//     return chr.active == true;
//   })
// );
// => 0

// using the `_.matches` callback shorthand
// console.log(_.findIndex(users, { user: "fred", active: false }));

// using the `_.matchesProperty` callback shorthand
// console.log(_.findIndex(users, "active", false));

// using the `_.property` callback shorthand
// _.findIndex(users, "active");
// => 2

_.filter([4, 5, 6], function (n) {
  return n % 2 == 0;
});
// => [4, 6]

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];

// using the `_.matches` callback shorthand
console.log(_.filter(users, { age: 36, active: true }));
// => ['barney']

// using the `_.matchesProperty` callback shorthand
console.log(_.filter(users, "active", false));
// => ['fred']

// using the `_.property` callback shorthand
console.log(_.filter(users, "active"));
// => ['barney']
