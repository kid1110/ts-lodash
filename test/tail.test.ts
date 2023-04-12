import {describe,expect,test} from '@jest/globals';
import { tail } from '../src/array/tail';


describe('[tail test]',()=>{
  test('tail([1,2,3])=>[2,3]',()=>{
    expect(tail([1,2,3])).toEqual([2,3])
  });
  test('tail([])=>[]',()=>{
    expect(tail([])).toEqual([])
  });
  test('tail([1])=>[]',()=>{
    expect(tail([1])).toEqual([])
  });
})
