import { expect,test ,describe} from 'vitest';
import { isObject } from '../src/language/isObject';
import { noop } from '../src/util/noop';


describe('[isObject test]',()=>{
  test('isObject({})=>true',()=>{
    expect(isObject({})).toEqual(true)
  });
  test('isObject([1,2,3])=>true',()=>{
    expect(isObject([1,2,3])).toEqual(true)
  });
  test('isObject(noop)=>true',()=>{
    expect(isObject(noop())).toEqual(false)
  });
  test('isObject(null)=>false',()=>{
    expect(isObject(null)).toEqual(false)
  });
})
