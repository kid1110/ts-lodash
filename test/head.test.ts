import {describe,expect,test} from '@jest/globals';
import { head } from '../src/array/head';


describe('[head test]',()=>{
  test('head([1, 2, 3])=>1',()=>{
    expect(head([1, 2, 3])).toEqual(1)
  });
  test('head([])=>undefined',()=>{
    expect(head([])).toEqual(undefined)
  })
})
