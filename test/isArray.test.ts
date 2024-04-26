/**
 * @vitest-environment jsdom
 */
import { expect,test ,describe} from 'vitest';
import { isArray } from '../src/language/isArray';

describe('[isArray test]',()=>{

  test('isArray([1,2,3]) => true',()=>{
    expect(isArray([1,2,3])).toEqual(true)
  });
  test('isArray(document.body.children) => false',()=>{
    expect(isArray(document.body.children)).toEqual(false)
  });
  test('isArray("abc") => false',()=>{
    expect(isArray('abc')).toEqual(false)
  });
  test('isArray("[[4]]") => true',()=>{
    expect(isArray([[4]])).toEqual(true)
  })
})
