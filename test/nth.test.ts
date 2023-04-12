import {describe,expect,test} from '@jest/globals';
import { nth } from '../src/array/nth';


describe('[nth test]',()=>{
  test("nth(['a', 'b', 'c', 'd'],1)=>b",()=>{
    expect(nth(['a','b','c','d'],1)).toEqual('b')
  });
  test("nth(['a', 'b', 'c', 'd'],-2)=>c",()=>{
    expect(nth(['a','b','c','d'],-2)).toEqual('c')
  });
  test("nth(['a', 'b', 'c', 'd'])=>a",()=>{
    expect(nth(['a','b','c','d'])).toEqual('a')
  });
})
