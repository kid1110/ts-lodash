function indexOf<T>(array:T[],value:T,fromIndex=0):number{
  for(let i=fromIndex;i<array.length;i++){
    if(array[i]===value){
      return i
    }
  }
  return -1
}
export {indexOf}
