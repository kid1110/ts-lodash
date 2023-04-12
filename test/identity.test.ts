import {describe,expect,test} from '@jest/globals';
import { identity } from '../src/util/identity';


describe('[identity test]',()=>{
  test('identity({"a":1})=?{"a":1}',()=>{
    expect(identity({"a":1})).toEqual({"a":1})
  })
})
