import { add, divide } from './number';
import { concatObject } from './object';
import { concatString } from './string';
import { concatArray } from './array';
import { fetchCake } from './async';

it('test adding two number', () => {
  expect(add(2,2)).toBe(4);
  expect(add(2,2)).toBeGreaterThanOrEqual(4);
  expect(add(2,2)).toBeLessThanOrEqual(4);
  expect(add(2, 2)).toBeTruthy();
});

it('test concat two string', () => {
  expect(concatString('sol', 'atin')).toMatch('solatin');
  expect(concatString(2, 'atin')).toBeFalsy();
});

it('test concat two object', () => {
  expect(concatObject({ a: 1}, {b: 2})).toEqual({ a: 1, b: 2});
  expect(concatObject({a: 1}, 'atin')).toBeFalsy();
});

it('test concat two array', () => {
  expect(concatArray([1], [2])).toContain(1);
  expect(concatArray([1], [2])).toContain(2);
  expect(concatArray(2, [2])).toBeFalsy();
});

it('test divide two number', () => {
  expect(divide(6, 2)).toEqual(3);
  // must wrap in a function to be able to catch error
  expect(() => divide(6, 0)).toThrowError('Divide by zero');
  expect(() => divide(6, 0)).toThrowError(/zero/);
  expect(() => divide(6, 0)).toThrowError(/^Divide by zero$/);
  expect(() => divide(6, 0)).toThrowError(Error);
  expect(() => divide(6, 0)).toThrowError(new Error('Divide by zero'));
})

it('test fetch success', async () => {
  const cake = await fetchCake();
  expect(cake).toBe('pancake');
});

it('test fetch error', async () => {
  try {
    await fetchCake(true);
  } catch (e) {
    expect(e.message).toMatch('fetch failed');
  }
});
