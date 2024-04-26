import { expect,test ,describe} from 'vitest';
import { concat } from '../src/array/concat';


describe('[concat test]',()=>{
  test('concat[1], 2, [3]) => [1, 2, 3]',()=>{
    expect(concat([1], 2, [3])).toEqual([1, 2, 3])
  });
  test('concat([1],2, [3], [[4]]) => [1, 2, 3, [4]]',()=>{
    expect(concat([1],2, [3],[4])).toEqual([1, 2, 3, 4])
  })
})
