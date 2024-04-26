import { expect,test ,describe} from 'vitest';
import { initial } from '../src/array/initial';


describe('[initial test]',()=>{
  test('initial([1, 2, 3])=>[1,2]',()=>{
    expect(initial([1,2,3])).toEqual([1,2])
  });
  test('initial([])=>[]',()=>{
    expect(initial([])).toEqual([])
  })
})
