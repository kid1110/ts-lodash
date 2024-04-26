import { expect,test ,describe} from 'vitest';
import { difference } from '../src/array/difference';


describe('[difference test]',()=>{
  test('difference([3, 2, 1], [4, 2])=>[3,1]',()=>{
    expect(difference([3, 2, 1], [4, 2])).toEqual([3,1])
  });
  test('difference([3, 2, 1], [4, 2],[3])=>[1]',()=>{
    expect(difference([3, 2, 1], [4, 2],[3])).toEqual([1])
  })
})
