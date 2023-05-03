import {describe,expect,test} from '@jest/globals';
import { keys } from '../src/object/keys';

describe('[keys test]',()=>{
  test('keys({a:1,b:2})=>["a","b"]',()=>{
    expect(keys({a:1,b:2})).toEqual(['a','b'])
  })
})
