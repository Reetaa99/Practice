const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns event.partitionKey when event and event.partitionKey exists", () => {
    const event1 = {
      partitionKey: 'hello1'
  }
    const trivialKey = deterministicPartitionKey(event1);
    expect(trivialKey).toBe('hello1');
  });
  it("Returns the string when event.partitionKey is number", () => {
    const event2 = {
      partitionKey: 123,
  }
    const trivialKey = deterministicPartitionKey(event2);
    expect(typeof trivialKey).toBe('string');
  });

  it("Returns hashed letter when event exists but event.partitionKey not exists", () => {
    const event3 = 'hello3'
    const trivialKey = deterministicPartitionKey(event3);
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify(event3)).digest("hex"));
  });

  it("Returns hashed letter when event.partitionKey exists but length is longer than 256", () => {
    const str = new Array(260).join('1')
    const event4 = {
      partitionKey: str
  }
    const trivialKey = deterministicPartitionKey(event4);
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(str).digest("hex"));
  });

});
