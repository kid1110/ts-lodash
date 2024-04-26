import { expect,test ,describe} from 'vitest';
import { fill } from '../src/array/fill';


describe('[fill test]',()=>{
  test('fill([1, 2, 3], "a") => ["a", "a", "a"]',()=>{
    expect(fill([1, 2, 3],'a')).toEqual(['a','a','a'])
  });
  test('fill(Array(3), 2) => [2,2,2]',()=>{
    expect(fill(Array(3),2)).toEqual([2,2,2])
  });
  test('fill([4, 6, 8, 10], "*",1,3) => [4, "*", "*", 10]',()=>{
    expect(fill([4, 6, 8, 10], "*",1,3)).toEqual([4, "*", "*", 10])
  })
})
