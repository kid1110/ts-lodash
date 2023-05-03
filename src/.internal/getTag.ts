type TypeTag= '[object Array]'|'[object ArrayBuffer]' |'[object Boolean]' |'[object Date]' |'[object Error]' |'[object Map]'|'[object Number]' |'[object Object]' |'[object RegExp]' | '[object Set]' | '[object String]' |'[object Symbol]' |'[object Undefined]' |'[object Int8Array]'

function getTag(value:any):string{
  return Object.prototype.toString.call(value) as TypeTag
}
export {getTag}
