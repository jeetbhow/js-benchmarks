let str = "This is a test string";

console.time("split");
for (let i = 0; i < 1000000; i++) {
  let arr = str.split("");
}
console.timeEnd("split");

console.time("spread");
for (let i = 0; i < 1000000; i++) {
  let arr = [...str];
}
console.timeEnd("spread");

console.time("Array.from");
for (let i = 0; i < 1000000; i++) {
  let arr = Array.from(str);
}
console.timeEnd("Array.from");

/**
 * Results
 * 
 * split: 21.647ms
 * spread: 98.125ms
 * Array.from: 103.829ms
 * 
 * For whatever reason, the str.split() method is significantly faster than the other methods.
 */