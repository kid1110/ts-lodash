import { expect,test ,describe} from 'vitest';
import { substract } from '../src/math/substract';


describe('[substract test]',()=>{
  test('substract(6,4)=>2',()=>{
    expect(substract(6,4)).toEqual(2)
  })
})
