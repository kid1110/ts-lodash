import {describe,expect,test} from '@jest/globals';
import { isMatch } from '../src/language/isMatch';


describe('[isMatch test]',()=>{
  test("isMatch({ 'a': 1, 'b': 2 },{'b':2})=>true",()=>{
    expect(isMatch({ 'a': 1, 'b': 2 },{'b':2})).toEqual(true)
  })
  test("isMatch({ 'a': 1, 'b': 2 },{'b':1})=>false",()=>{
    expect(isMatch({ 'a': 1, 'b': 2 },{'b':1})).toEqual(false)
  })
  test('isMatch({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }) => false', () => {
    expect(isMatch({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(false);
});
})
