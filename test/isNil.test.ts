import {describe,expect,test} from '@jest/globals';
import { isNil } from '../src/language/isNil';


describe('[isNil test]',()=>{
  test('isNil(null)=>true',()=>{
    expect(isNil(null)).toEqual(true)
  })

  test('isNil(void 0)=>true',()=>{
    expect(isNil(void 0)).toEqual(true)
  })
  test('isNil(NaN)=>false',()=>{
    expect(isNil(NaN)).toEqual(false)
  })
})
