import { expect,test ,describe} from 'vitest';
import { multiply } from '../src/math/multiply';

describe('[multiply test]',()=>{
  test('multiply(6,4)',()=>{
    expect(multiply(6,4)).toEqual(24)
  })
})
