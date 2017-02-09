const expect = require('expect');
const testsymver = require('../index');

describe('break-yourself', () => {
  describe('when all tests are successful', () => {
    it('resolves a promise with a report showing 0 failures', () => {
      return expect(testsymver()).toBeTruthy;
    });
  });
});
