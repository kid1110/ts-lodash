import { isArray } from "../language/isArray"
import { flatten } from "./flatten"
//TODO do not pass T[][] test
function concat<T>(array:T[],...values:(T | T[])[]):T[]{
  let res:T[] = [...array]
  values.forEach((arg)=>{
    console.log(arg)
    if(isArray(arg)){
      arg = flatten(arg as T[])
      res = [...res,...arg as T[]]
    }else{
      res = [...res,arg as T]
    }
  })
  return res
}

export {concat}
