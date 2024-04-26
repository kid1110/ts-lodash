import { expect,test ,describe} from 'vitest';
import { noop } from '../src/util/noop';


describe('[noop test]',()=>{
  test('noop()=>undefined',()=>{
    expect(noop()).toEqual(undefined)
  })
})
