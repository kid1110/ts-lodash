import { expect,test ,describe} from 'vitest';
import { ceil } from '../src/math/ceil';


describe('[ceil test]',()=>{
  test("ceil(4.006)=>5",()=>{
    expect(ceil(4.006)).toEqual(5)
  })
  test("ceil(6.004,2)=>6.01",()=>{
    expect(ceil(6.004,2)).toEqual(6.01)
  })
  test("ceil(6040,-2)=>6100",()=>{
    expect(ceil(6040,-2)).toEqual(6100)
  })
})
