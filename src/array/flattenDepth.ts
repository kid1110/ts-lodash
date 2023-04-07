import { isArray } from "../language/isArray"

function flattenDepth<T>(array:T[],depth=1):T[]{
  let res: T[] = []
  for(let i  = 0; i < array.length;i++){
    if(depth >0 && isArray(array[i])){
      res = [...res,...flattenDepth(array[i] as T[],depth-1)]
    }else{
      res = [...res,array[i] as T]
    }
  }
  return res

}
export {flattenDepth}
