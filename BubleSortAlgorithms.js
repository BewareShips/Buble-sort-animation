// import swapElements from "./SwapElements.js";
import { rootDiv, steps } from "./BubleSortConstans.js";

export class BubleSortAlgorithm {
   constructor(elements, nodesArrayName, delay = 500) {
      this.delay = delay;
      this.elements = elements;
      this.nodesArrayName = nodesArrayName;
   }
   async _delay() {
      await new Promise((resolve) =>
         setTimeout(() => {
            resolve();
         }, this.delay)
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

         window.requestAnimationFrame(function () {
            setTimeout(() => {
               rootDiv.insertBefore(el1, el2);
               resolve();
            }, 250);
         });
      });
   }

   async Bublesort() {
      console.log(this.elements);
      for (let i = 0; i < this.elements.length; i++) {
         for (let j = 0; j < this.elements.length - i - 1; j++) {
            steps.innerText = Number(steps.innerText) + 1;
            //Changing a backgroundColor of compared elements
            this.elements[j].style.backgroundColor = "#B2D732";
            this.elements[j + 1].style.backgroundColor = "#94B814";

            //To wait for a delay time
            await this._delay();

            let value1 = Number(this.elements[j].childNodes[0].innerHTML);
            let value2 = Number(this.elements[j + 1].childNodes[0].innerHTML);
            //Comparing value of 2 elements

            if (value1 > value2) {
               await this.swapElements(this.elements[j + 1], this.elements[j]);
               //Saving a swaping of elements
               this.elements = this.getUpdatedArray();
            }

            this.elements[j].style.backgroundColor = "#3ab2e2";
            this.elements[j + 1].style.backgroundColor = "#3ab2e2";
         }
         //changing the color of greatest element
         this.elements[this.elements.length - i - 1].style.backgroundColor =
            "#FB9902";
      }
   }
}
