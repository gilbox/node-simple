const { expect } = require('chai');
const helloWorld = require('../src/helloWorld');

describe('helloWorld', function() {
  it('returns Hello World', () => {
    expect(helloWorld()).to.equal('Hello World');
  });
});