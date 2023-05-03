import {describe,expect,test} from '@jest/globals';
import { isObjectLike } from '../src/language/isObjectLike';
import { noop } from '../src/util/noop';


describe('[isObjectLike test]',()=>{
  test('isObjectLike({})=>true',()=>{
    expect(isObjectLike({})).toEqual(true)
  })
  test('isObjectLike([1,2,3])=>true',()=>{
    expect(isObjectLike([1,2,3])).toEqual(true)
  })
  test('isObjectLike(noop())=>false',()=>{
    expect(isObjectLike(noop())).toEqual(false)
  })
  test('isObjectLike(null)=>false',()=>{
    expect(isObjectLike(null)).toEqual(false)
  })
})
