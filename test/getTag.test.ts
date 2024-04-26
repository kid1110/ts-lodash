import { expect,test ,describe} from 'vitest';
import {getTag} from '../src/.internal/getTag'


describe('[getTag test]',()=>{
  test('getTag({})=>[object Object]',()=>{
    expect(getTag({})).toEqual('[object Object]')
  })
  test('getTag(null)=>[object Null]',()=>{
    expect(getTag(null)).toEqual('[object Null]')
  })
  test('getTag(undefined)=>[object Undefined]',()=>{
    expect(getTag(undefined)).toEqual('[object Undefined]')
  })
  test('getTag([1,2,3]])=>[object Array]',()=>{
    expect(getTag([1,2,3])).toEqual('[object Array]')
  })
  test('getTag(()=>1)=>[object Function]',()=>{
    expect(getTag(()=>1)).toEqual('[object Function]')
  })
  test('getTag("1")=>[object String]',()=>{
    expect(getTag("1")).toEqual('[object String]')
  })
  test('getTag(new Date())=>[object Date]',()=>{
    expect(getTag(new Date())).toEqual('[object Date]')
  })
  test('getTag(1)=>[object Number]',()=>{
    expect(getTag(1)).toEqual('[object Number]')
  })
  test('getTag(new RegExp("."))=>[object RegExp]',()=>{
    expect(getTag(new RegExp("."))).toEqual('[object RegExp]')
  })
  test('getTag(true)=>[object Boolean]',()=>{
    expect(getTag(true)).toEqual('[object Boolean]')
  })

})
