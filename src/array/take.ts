import { slice } from "./slice";

function take<T>(array:T[],n=1):T[]{
  return slice(array,0,0+n)
}
export {take}
