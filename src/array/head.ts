function head<T>(array: T[]):any{
  return array.length==0 ? undefined:array[0]
}

export {head}
