function compact<T>(array: (T | false | null | 0 | "" | undefined)[]):Array<T>[]{
  return array.filter(item=>item != false && item != null && item != 0 && item != "" && item != undefined) as Array<T>[]
}
export {compact}
