import { assert } from 'chai';
import { describe, it } from 'mocha';
import luhn from '../dist/luhn.min';

describe('checksum', () => {
  it('Should be 8', () => assert.equal(luhn.checksum(1), 8));
  it('Should be 5', () => assert.equal(luhn.checksum(12), 5));
  it('Should be 2', () => assert.equal(luhn.checksum(3000001), 2));
  it('Should be 0', () => assert.equal(luhn.checksum(3000002), 0));
  it('Should be 4', () => assert.equal(luhn.checksum(3032567), 4));
  it('Should be 5', () => assert.equal(luhn.checksum(3100023), 5));
  it('Should be 0', () => assert.equal(luhn.checksum(3111222), 0));
  it('Should be 7', () => assert.equal(luhn.checksum(3987653), 7));
});

describe('generate', () => {
  it('Should be 125', () => assert.equal(luhn.generate(12), 125));
  it('Should be 00125', () => assert.equal(luhn.generate(12, { pad: 5 }), '00125'));
});

describe('random', () => {
  it('Should be 12', () => assert.equal(luhn.random(12).length, 12));
  it('Should be 50', () => assert.equal(luhn.random(12, { pad: 50 }).length, 50));
});

describe('validate', () => {
  it('Should be true', () => assert.equal(luhn.validate(18), true));
  it('Should be true', () => assert.equal(luhn.validate(125), true));
  it('Should be true', () => assert.equal(luhn.validate(30000012), true));
  it('Should be true', () => assert.equal(luhn.validate(30000020), true));
  it('Should be true', () => assert.equal(luhn.validate(30325674), true));
  it('Should be true', () => assert.equal(luhn.validate(31000235), true));
  it('Should be true', () => assert.equal(luhn.validate(31112220), true));
  it('Should be true', () => assert.equal(luhn.validate(39876537), true));
  it('Should be true', () => assert.equal(luhn.validate('54833184596638864915195736286128781213916608803535'), true));
  it('Should be true', () => assert.equal(luhn.validate('6885184926605792519681265660993336909501776690971634381082359845897424816619457899445269185955425209'), true));
});
