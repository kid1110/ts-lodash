import { expect,test ,describe} from 'vitest';
import { isEqual } from '../src/language/isEqual';

describe('[isEqual test]',()=>{
  test('isEqual({"a":"1"},{"a":"1"})=>true',()=>{
    expect(isEqual({"a":"1"},{"a":"1"})).toEqual(true)
  })
  test('isEqual(null,{"a":"1"})=>false',()=>{
    expect(isEqual(null,{"a":1})).toEqual(false)
  })
  test('isEqual("test","www")=>false',()=>{
    expect(isEqual("test","www")).toEqual(false)
  })
  test('isEqual("test",{"a":"1"})=>false',()=>{
    expect(isEqual(new String("test"),{"a":"1"})).toEqual(false)
  })
  test('isEqual([1,2,3],[1,2,3])=>true',()=>{
    expect(isEqual([1,2,3],[1,2,3])).toEqual(true)
  })
  test('isEqual(new RegExp("^a"),new RegExp("^a"))=>true',()=>{
    expect(isEqual(new RegExp("^a"),new RegExp("^a"))).toEqual(true)
  })
  test('isEqual(true,true)=>true',()=>{
    expect(isEqual(true,true)).toEqual(true)
  })
})
