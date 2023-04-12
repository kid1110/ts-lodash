import {describe,expect,test} from '@jest/globals';
import { slice } from '../src/array/slice';


describe('[slice test]',()=>{
  test('slice([1,2,3],3,1)=>[]',()=>{
    expect(slice([1,2,3],3,1)).toEqual([])
  })
  test('slice([1,2,3])=>[1,2,3]',()=>{
    expect(slice([1,2,3])).toEqual([1,2,3])
  })
  test('slice([1,2,3],0,4)=>[1,2,3]',()=>{
    expect(slice([1,2,3],0,4)).toEqual([1,2,3])
  })

})
