import { expect,test ,describe} from 'vitest';
import { takeRight } from '../src/array/takeRight';


describe('[takeRight test]',()=>{
  test('takeRight([1,2,3])=>[3]',()=>{
    expect(takeRight([1,2,3])).toEqual([3])
  })
  test('takeRight([1,2,3],2)=>[2,3]',()=>{
    expect(takeRight([1,2,3],2)).toEqual([2,3])
  })
  test('takeRight([1,2,3],5)=>[1,2,3]',()=>{
    expect(takeRight([1,2,3],5)).toEqual([1,2,3])
  })
  test('takeRight([1,2,3],0)=>[]',()=>{
    expect(takeRight([1,2,3],0)).toEqual([])
  })
})
