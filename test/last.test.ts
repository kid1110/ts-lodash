import {describe,expect,test} from '@jest/globals';
import { last } from '../src/array/last';


describe('[last test]',()=>{
  test('last([1,2,3])=>3',()=>{
    expect(last([1,2,3])).toEqual(3)
  });
  test('last([])=>undefined',()=>{
    expect(last([])).toEqual(undefined)
  })
})
