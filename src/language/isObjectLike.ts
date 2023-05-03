function isObjectLike(value:any):value is object{
  return typeof value=== 'object' && value !== null
}
export {isObjectLike}
