const fs = require('fs');

console.log('START');

process.on('exit', () => console.log('process exit'));

setTimeout(() => console.log('setTimeout 1'), 0);

setImmediate(() => console.log('setImmediate'));

fs.readFile(__filename, () => {
    setTimeout(() => console.log('readFile setTimeout'), 0);
    setImmediate(() => console.log('readFile setImmediate'));
    process.nextTick(() => console.log('readfile next tick'));
})

Promise.resolve()
.then(() => {
    console.log('Promise');
    process.nextTick(() =>console.log('Promise next tick'))
    setTimeout(() => console.log('promise setTimeout 1'), 0);
    Promise.resolve().then(() => console.log('Promise inside promise'))
 
});


Promise.resolve()
.then(() => {
    console.log('Promise 2');
    process.nextTick(() =>console.log('Promise next tick 2'))
});

process.nextTick(() =>console.log('next tick 1'));

setTimeout(() => console.log('setTimeout 2'), 0);

console.log('END');