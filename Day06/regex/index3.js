/*
const a = /ca+t/; // a가 1개 이상 포함
a.test("my new caaaaat"); // true

const b = /ca?t/; // a가 optional[있어도 되고 없어도 되고]
b.test("my new ct"); // true

const c = /ca{2}t/; // a가 2개만 포함
c.test("my new caaat"); // false

const d = /ca{2,}t/; // a가 최소 2개 이상 포함
d.test("my new caaat"); // true

const e = /ca{2,4}t/; // a가 2,3,4개 중에 포함
d.test("my new caaat"); // true
*/
