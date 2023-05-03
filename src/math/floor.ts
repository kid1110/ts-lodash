function floor(num:number,precision=0):number{
  const factor = Math.pow(10,precision)
  return Math.floor(num*factor) / factor
}
export {floor}
