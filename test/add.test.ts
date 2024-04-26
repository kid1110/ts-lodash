import { expect,test ,describe} from 'vitest';
import { add } from '../src/math/add';


describe('[add test]',()=>{
  test('add(1,2)=>3',()=>{
    expect(add(1,2)).toEqual(3)
  })
})
