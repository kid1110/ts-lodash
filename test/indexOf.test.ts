import {describe,expect,test} from '@jest/globals';
import { indexOf } from '../src/array/indexOf';

describe('[indexOf test]',()=>{
  test('indexOf([1, 2, 1, 2], 2)=>1',()=>{
    expect(indexOf([1, 2, 1, 2], 2)).toEqual(1)
  });
  test('indexOf([1, 2, 1, 2], 2, 2)=>3',()=>{
    expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3)
  });
  test('indexOf([1, 2, 1, 2], 3)=>-1',()=>{
    expect(indexOf([1, 2, 1, 2], 3)).toEqual(-1)
  });
})
