import { GenerateArray } from "./GenerateArray.js";
import { BubleSortAlgorithm } from "./BubleSortAlgorithms.js";
import {button} from './BubleSortConstans.js'

const preStart = () =>{
  const array = new GenerateArray(); //Put as default a 20 elements
  array.render(); //Appending array of elements with className .block
}

const  start = async () => {
 
  button.disabled=true
  //Put a delay in cycle for comparing elements
   const algorithm = new BubleSortAlgorithm();
   await algorithm.Bublesort();
   button.disabled=false
};



document.addEventListener("DOMContentLoaded", preStart);
button.addEventListener("click",start)
