function fill<T>(array:T[],value: any, start=0,end=array.length):T[]{
  return array.fill(value,start,end)
}
export {fill}
