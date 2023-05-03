import {isObjectLike} from '../language/isObjectLike'
import {baseIsEqualDeep} from './baseIsEqualDeep'
type keyProperty = number | string | Symbol
type isEqualCustomizer =(
  objValue: any,
  othValue: any,
  key:keyProperty,
  object: any,
  other: any,
  stack: any
)=>boolean |undefined
function baseIsEqual(value: any,other: any,bitmask=1,customizer ?: isEqualCustomizer,stack= new Map()):boolean{
  if(value === other){
    return true
  }
  if(value == null || other == null){
    return false
  }
  if((!isObjectLike(value)) ||(!isObjectLike(other))){
    return false
  }
  return baseIsEqualDeep(value,other,bitmask,customizer,stack)
}
export {baseIsEqual,isEqualCustomizer}

