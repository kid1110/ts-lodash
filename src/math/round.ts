function round(num:number,precision=0):number{
  const factor = Math.pow(10,precision)
  return Math.round(num*factor) / factor
}
export {round}
