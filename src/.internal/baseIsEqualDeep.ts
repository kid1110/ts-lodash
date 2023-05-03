import { baseIsEqual, isEqualCustomizer } from "./baseIsEqual";
import {isArray} from '../language/isArray'
import { getTag } from "./getTag";
import {keys} from "../object/keys"
const COMPARE_PARTIAL_FLAG = 1
const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const hasOwnProperty = Object?.hasOwnProperty


function baseIsEqualDeep(value:any,other:any,bitmask=1,customizer ?:isEqualCustomizer,stack=new Map()):boolean{
    const valTag = getTag(value)
    const othTag = getTag(other)
    if(valTag !== othTag){
      return false
    }
    switch(valTag){
      case '[object RegExp]':
      case '[object String]':
        return ''+value === ''+other
      case '[object Date]':
        return Object.is((value as Date).getTime(),(other as Date).getTime())
      case '[object Number]':
      case '[object Boolean]':
        return Object.is(value,other)
      case '[object Symbol]':
        return Symbol.prototype.valueOf.call(value) === Symbol.prototype.valueOf.call(other)
    }
    if(stack.has(value)){
      return stack.get(value) === other && stack.get(other) === value
    }
    let result:boolean
    stack.set(value,other)
    stack.set(other,value)
    const isPartial = bitmask & COMPARE_PARTIAL_FLAG
    if(isArray(value)&& isArray(other)){
      if(!isPartial && value.length !== other.length){
        return false
      }
      result = other.every((ve,index)=>{
        const compared = customizer && customizer(value[index],other[index],index,value,other,stack)
        if(compared !== undefined){
          return compared
        }else{
          return baseIsEqual(value[index],other[index],bitmask,customizer,stack)
        }
      })
    }else{
      //object issue
      const valkeys = keys(value)
      if(!isPartial && valkeys.length != keys(other).length){
        return false
      }
      result = valkeys.every((key)=>{
        const compared = customizer && customizer(value[key],other[key],key,value,other,stack)
        if(compared !== undefined){
          return compared
        }else{
          return baseIsEqual(value[key],other[key],bitmask,customizer,stack)
        }
      })

    }
    stack.delete(other)
    stack.delete(value)
    return result
}
export {baseIsEqualDeep}
