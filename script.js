import { GenerateArray } from "./GenerateArray.js";
import { BubleSortAlgorithm } from "./BubleSortAlgorithms.js";
import {button} from './BubleSortConstans.js'

const preStart = () =>{
  const array = new GenerateArray(); //Put quantity of element as you want( default a 20 elements)
  array.render(); //Appending array of elements with className .block
}

const  start = async () => {
 
  button.disabled=true
  // Put delay in cycle as you want( default 500 milliseconds)
   const algorithm = new BubleSortAlgorithm();
   await algorithm.Bublesort();
   button.disabled=false
};



document.addEventListener("DOMContentLoaded", preStart);
button.addEventListener("click",start)
