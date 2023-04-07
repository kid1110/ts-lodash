import {describe,expect,test} from '@jest/globals';
import { flatten } from '../src/array/flatten';


describe('[flatten test]',()=>{
  test('flatten([1, [2, [3, [4]], 5]])=>[1, 2, [3, [4]], 5]',()=>{
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
  })
})
