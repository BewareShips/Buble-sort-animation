import { GenerateArray } from "./GenerateArray.js";
import { BubleSortAlgorithm } from "./BubleSortAlgorithms.js";
import {button} from './BubleSortConstans.js'

const preStart = () =>{
  const array = new GenerateArray(); //Put as default a 20 elements
  array.render(); //Appending array of elements with className .block
}

const  start = async () => {
  //  const array = new GenerateArray(); //Put as default a 20 elements
  //  array.render(); //Appending array of elements with className .block
  button.disabled=true
   const nodesArrayName = () => document.querySelectorAll(".block");
   const blocks = nodesArrayName();
   const algorithm = new BubleSortAlgorithm(blocks, nodesArrayName);
   await algorithm.Bublesort();
   button.disabled=false
};



document.addEventListener("DOMContentLoaded", preStart);
button.addEventListener("click",start)
