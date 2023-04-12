import {describe,expect,test} from '@jest/globals';
import { add } from '../src/math/add';


describe('[add test]',()=>{
  test('add(1,2)=>3',()=>{
    expect(add(1,2)).toEqual(3)
  })
})
