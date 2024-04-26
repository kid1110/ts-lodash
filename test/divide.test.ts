import { expect,test ,describe} from 'vitest';
import { divide } from '../src/math/divide';


describe('[divide test]',()=>{
  test('divide(6,4)=>1.5',()=>{
    expect(divide(6,4)).toEqual(1.5)
  })
  test('divide(6,0)=>Infinity',()=>{
    expect(divide(6,0)).toEqual(Infinity)
  })
})
