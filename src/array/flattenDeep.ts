import { flattenDepth } from "./flattenDepth";

function flattenDeep<T>(array:T[]):T[]{
  return flattenDepth(array,Infinity)
}
export {flattenDeep}
