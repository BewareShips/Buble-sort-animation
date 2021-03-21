// import swapElements from "./SwapElements.js";
import { rootDiv, steps } from "./BubleSortConstans.js";

export class BubleSortAlgorithm {
   constructor(delayTime = 500) {
      this.delayTime = delayTime;
  
   }

   async _delay() {
      await new Promise((resolve) =>
         setTimeout(() => {
            resolve();
         }, this.delayTime)
      );
   }

   getUpdatedArray() {
      return this.nodesArrayName();
   }
   async swapElements(el1, el2) {
      return new Promise((resolve) => {
         const temp = el1.style.transform;
         el1.style.transform = el2.style.transform;
         el2.style.transform = temp;
         // resolve a animation with delaying
         window.requestAnimationFrame(function () {
            setTimeout(() => {
               rootDiv.insertBefore(el1, el2);
               resolve();
            },200);
         });
      });
   }

   async Bublesort() {
      let elements = document.querySelectorAll(".block");
      for (let i = 0; i < elements.length; i++) {
         for (let j = 0; j < elements.length - i - 1; j++) {
            steps.innerText = Number(steps.innerText) + 1;
            //Changing a backgroundColor of compared elements
            elements[j].style.backgroundColor = "#B2D732";
            elements[j + 1].style.backgroundColor = "#94B814";

            //To wait for a delay time
            await this._delay();

            let value1 = Number(elements[j].childNodes[0].innerHTML);
            let value2 = Number(elements[j + 1].childNodes[0].innerHTML);
            //Comparing value of 2 elements

            if (value1 > value2) {
               await this.swapElements(elements[j + 1], elements[j]);
               //Saving a swaping of elements
               elements = document.querySelectorAll(".block");
            }

            elements[j].style.backgroundColor = "#3ab2e2";
            elements[j + 1].style.backgroundColor = "#3ab2e2";
         }
         //changing the color of greatest element
         elements[elements.length - i - 1].style.backgroundColor = "#FB9902";
      }
   }
}
