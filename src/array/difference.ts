import { flatten } from "./flatten";

function difference<T>(array:T[],...values:T[][]): T[]{
  return array.filter((val)=> !flatten(values).some((oVal=>Object.is(val,oVal))))
}
export {difference}
