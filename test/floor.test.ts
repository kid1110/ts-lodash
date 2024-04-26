import { expect,test ,describe} from 'vitest';
import { floor } from '../src/math/floor';

describe('[floor test]',()=>{
  test('floor(4.006)=>4',()=>{
    expect(floor(4.006)).toEqual(4)
  })
  test('floor(0.046, 2)=>0.04',()=>{
    expect(floor(0.046, 2)).toEqual(0.04)
  })
  test('floor(4060, -2)=>4000',()=>{
    expect(floor(4060, -2)).toEqual(4000)
  })
})
