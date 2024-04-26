import { expect,test ,describe} from 'vitest';
import { dropRight } from '../src/array/dropRight';


describe('[dropRight test]',()=>{
  test('dropRight([1, 2, 3])=> [1, 2]',()=>{
    expect(dropRight([1, 2, 3])).toEqual([1, 2])
  });
  test('dropRight([1, 2, 3], 2)=> [1]',()=>{
    expect(dropRight([1, 2, 3], 2)).toEqual([1])
  });
  test('dropRight([1, 2, 3], 5)=> []',()=>{
    expect(dropRight([1, 2, 3], 5)).toEqual([])
  });
  test('dropRight([1, 2, 3],0)=> [1,2,3]',()=>{
    expect(dropRight([1,2,3],0)).toEqual([1,2,3])
  })
})
