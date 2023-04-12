function lastIndexOf<T>(array:T[],value:T,fromIndex=array.length-1):number{
  if(array.length <=0 || fromIndex<0){
    return -1
  }
  for(let i = fromIndex;i >=0;i--){
    if(array[i] === value){
      return i
    }
  }
  return -1
}
export {lastIndexOf}
