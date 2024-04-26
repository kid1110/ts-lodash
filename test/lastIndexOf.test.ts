import { expect,test ,describe} from 'vitest';
import { lastIndexOf } from '../src/array/lastIndexOf';


describe('[lastIndexOf test]',()=>{
  test('lastIndexOf([],0)=>-1',()=>{
    expect(lastIndexOf([],0)).toEqual(-1)
  });
  test('lastIndexOf([0],0,-1)=>-1',()=>{
    expect(lastIndexOf([0],0,-1)).toEqual(-1)
  });
  test('lastIndexOf([1, 2, 1, 2], 2)=>3',()=>{
    expect(lastIndexOf([1, 2, 1, 2], 2)).toEqual(3)
  });
  test('lastIndexOf([1, 2, 1, 2], 2, 2)=>1',()=>{
    expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toEqual(1)
  });
  test('lastIndexOf([1, 2, 1, 2], 3, 2)=>-1',()=>{
    expect(lastIndexOf([1, 2, 1, 2], 3, 2)).toEqual(-1)
  })

})
