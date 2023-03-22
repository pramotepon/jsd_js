// import { double, add } from "./toExport.js";
// console.log(double(5));
// console.log(add(1,5));

import * as myCal from './toExport.js';

console.log(myCal.double(5));
console.log(myCal.add(1, 5));