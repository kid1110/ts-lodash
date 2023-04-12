function initial<T>(array:T[]):T[]{
  if(array.length === 0){
    return []
  }else{
    let res:T[] = []
    for(let i=0;i<array.length-1;i++){
      res = [...res,array[i]]
    }
    return res
  }
}
export {initial}
