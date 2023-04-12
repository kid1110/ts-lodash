import {describe,expect,test} from '@jest/globals';
import { noop } from '../src/util/noop';


describe('[noop test]',()=>{
  test('noop()=>undefined',()=>{
    expect(noop()).toEqual(undefined)
  })
})
