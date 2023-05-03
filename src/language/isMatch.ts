function isMatch(obj:object,source:object):boolean{
  for(const key in source){
    if(!(key in obj) || obj[key as keyof typeof obj] !== source[key as keyof typeof source]){
      return false
    }
  }
  return true
}
export {isMatch}
