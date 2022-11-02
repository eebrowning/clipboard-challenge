const { deterministicPartitionKey } = require("./dpk");


let event = { partitionKey: '123' };
let testEmpty = '';
let testUndefined;
let testBadType = { partitionKey: -123123123 };
let testTooLong = { partitionKey: '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890' }

const MAX_PARTITION_KEY_LENGTH = 256;

let testVal = deterministicPartitionKey(event);


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

test('Event has partitionKey', () => {
  // let result = deterministicPartitionKey(event);
  console.log(testVal);

  expect(event.partitionKey === undefined).toBe(false);
});

test('Candidate is appropriate type', () => {
  console.log(testVal);

  expect(typeof testVal == 'string').toBe(true);
})

test('PartitionKey has appropriate length', () => {

  expect(event.partitionKey.length <= MAX_PARTITION_KEY_LENGTH && event.partitionKey.length > 0).toBe(true);
})
