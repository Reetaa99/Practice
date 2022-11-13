const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());

const event1 = {
    partitionKey: 'hello1'
}
console.log(deterministicPartitionKey(event1));

const event2 = {
    partitionKey: 123,
}
console.log(deterministicPartitionKey(event2));

const event3 = 'hello3'
console.log(deterministicPartitionKey(event3));


const event4 = {
    partitionKey: new Array(260).join('1')
}
console.log(deterministicPartitionKey(event4));
