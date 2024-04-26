import { expect,test ,describe} from 'vitest';
import { identity } from '../src/util/identity';


describe('[identity test]',()=>{
  test('identity({"a":1})=?{"a":1}',()=>{
    expect(identity({"a":1})).toEqual({"a":1})
  })
})
