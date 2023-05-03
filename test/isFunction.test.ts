import {describe,expect,test} from '@jest/globals';
import { isFunction } from '../src/language/isFunction';


describe('[isFunction test]',()=>{
  test('isFunction(abc)=>false',()=>{
    expect(isFunction(/abc/)).toEqual(false)
  })
  test('isFunction(()=>1))=>true',()=>{
    expect(isFunction(()=>1)).toEqual(true)
  })
})
