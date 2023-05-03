import {describe,expect,test} from '@jest/globals';
import { round } from '../src/math/round';


describe('[round test]',()=>{
  test('round(4.006)=>4',()=>{
    expect(round(4.006)).toEqual(4)
  })
  test('round(4.006,2)=>4.01',()=>{
    expect(round(4.006,2)).toEqual(4.01)
  })
  test('round(4060,-2)=>4100',()=>{
    expect(round(4060,-2)).toEqual(4100)
  })
})
