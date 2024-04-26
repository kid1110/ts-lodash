import { expect,test ,describe} from 'vitest';
import { join } from '../src/array/join';

describe('[join test]',()=>{
  test('join(["a", "b", "c"], "c")',()=>{
    expect(join(["a","b","c"],'~')).toEqual("a~b~c")
});
  test('join(["a", "b", "c"])',()=>{
    expect(join(["a","b","c"])).toEqual("a,b,c")
  })
})
