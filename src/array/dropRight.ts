function dropRight<T>(array:T[],n=1):T[]{
  return array.slice(0,(array.length-n) > 0 ?(array.length-n):0 )
}
export {dropRight}
