import { expect,test ,describe} from 'vitest';
import { reverse } from '../src/array/reverse';


describe('[reverse test]',()=>{
  test('reverse([1,2,3])=>[3,2,1]',()=>{
    expect(reverse([1,2,3])).toEqual([3,2,1])
  })
})
