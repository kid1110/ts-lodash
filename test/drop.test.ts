import { expect,test ,describe} from 'vitest';
import { drop } from '../src/array/drop';

describe('[drop test]',()=>{
  test('drop([1,2,3])=> [2,3]',()=>{
    expect(drop([1,2,3])).toEqual([2,3])
  });
  test('drop([1, 2, 3], 2)=>[3]',()=>{
    expect(drop([1,2,3],2)).toEqual([3])
  });
  test('drop([1,2,3],5)=>[]',()=>{
    expect(drop([1,2,3],5)).toEqual([])
  });
  test('drop([1,2,3],0)=>[1,2,3]',()=>{
    expect(drop([1,2,3],0)).toEqual([1,2,3])
  });
})
