import {describe,expect,test} from '@jest/globals';
import { flattenDepth } from '../src/array/flattenDepth';


describe('[flattenDepth test]',()=>{
  test('flattenDepth([1, [2, [3, [4]], 5]],1) => [1, 2, [3, [4]], 5]',()=>{
    expect(flattenDepth([1, [2, [3, [4]], 5]],1)).toEqual([1, 2, [3, [4]], 5])
  });
  test('flattenDepth([1, [2, [3, [4]], 5]],2) => [1, 2, 3, [4], 5]',()=>{
    expect(flattenDepth([1, [2, [3, [4]], 5]],2)).toEqual([1, 2, 3, [4], 5])
  });
  test('flattenDepth([1, [2, [3, [4]], 5]]) => [1, 2, [3, [4]], 5]',()=>{
    expect(flattenDepth([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
  })
})
