import {describe,expect,test} from '@jest/globals';
import { chunk } from "../src/array/chunk";


describe('[chunk test]',()=>{
  test('chunk(["a","b","c","d"],2) => [["a","b"],["c","d"]]',()=>{
    expect(chunk(['a','b','c','d'],2)).toEqual([
      ['a','b'],
      ['c','d'],
    ])
  });
  test('chunk(["a","b","c","d"],3) => [["a","b","c"],["d"]]',()=>{
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([
      ['a','b','c'],
      ['d']
    ])
  });
  test('chunk([],1) =>[]',()=>{
    expect(chunk([],1)).toEqual([])
  });
  test('chunk([1,2,3]) =>[1,2,3]',()=>{
    expect(chunk([1,2,3])).toEqual([[1],[2],[3]])
  });

})


