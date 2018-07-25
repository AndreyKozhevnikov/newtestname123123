const assert = require('assert');
const operations = require('./operations.js');

it('should return true', () => {
  assert.equal(true, true);
}); 

it('sum 1 and 3 is 4', () => {
  assert.equal(operations.add(1, 3), 4);
});

it('sum -1 and -1 is -2', () => {
  assert.equal(operations.add(-1, -1), -2);
});

it('diff 33 and 3 is 30', () => {
    assert.equal(operations.subtract(33, 3), 30);
});

it('mult of 12 and 12 is 144', () => {
  assert.equal(operations.multiply(12, 12), 144);
});

it('part of 10 and 2 is 5', () => { 
  assert.equal(operations.divide(10, 2), 5);
});
it('error when string is used', () => {
  assert.equal(operations.validateNumbers('sammy', 5), false);
});

it('error when two string is used', () => {
  assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
});

it('success with numbers', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
});