import { slice } from "./slice";

function takeRight<T>(array:T[],n=1):T[]{
  return slice(array,(array.length-n) <0 ? 0:(array.length-n),array.length)
}
export {takeRight}
