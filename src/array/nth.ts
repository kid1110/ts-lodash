function nth<T>(array:T[],n=0):T|undefined{
  return array[(array.length+n)%array.length]
}
export {nth}
