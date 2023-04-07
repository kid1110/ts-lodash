function chunk<T>(array: T[],size = 1): Array<T>[]{
  const length:number =  array.length
  if(length == 0 || size < 1){
    return []
  }
  let index = 0
  let finish = 0
  const resut:Array<T>[] = new Array(Math.ceil(length / size))
  while(index < length){
    resut[finish++] = array.slice(index,index+=size)
  }
  return resut
}

export {chunk}
