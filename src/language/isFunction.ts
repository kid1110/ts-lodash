function isFunction(value:any):boolean{
  const type = typeof value
  return type === 'function'
}
export {isFunction}
