import { slice } from "./slice";

function tail<T>(array:T[]):T[]{
  return slice(array,1)
}
export {tail}
