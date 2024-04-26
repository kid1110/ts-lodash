import { expect,test ,describe} from 'vitest';
import { flattenDeep } from '../src/array/flattenDeep';

describe('[flattenDeep test]',()=>{
  test('flattenDeep([1, [2, [3, [4]], 5]])=>[1, 2, 3, 4, 5]',()=>{
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
  })
})
