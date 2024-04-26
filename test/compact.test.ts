import { expect,test ,describe} from 'vitest';
import { compact } from '../src/array/compact';

describe('[compact test]',()=>{
  test('compact([0, 1, false, 2, "", 3]) => [1, 2, 3]',()=>{
    expect(compact([0, 1, false, 2, '', 3,undefined])).toEqual([1, 2, 3])
  });
  test('compact([]) => []',()=>{
    expect(compact([])).toEqual([])
  });
})
