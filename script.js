const rootDiv = document.querySelector("#root");
const compareDiv = document.querySelector("#comparisons")

//Generating array of elements
function generateArray() {
   for (let i = 0; i < 20; i++) {
      //Getting a value from 1 to 100
      const value = Math.ceil(Math.random() * 100);
      //Creating a div element
      const array_el = document.createElement("div");
      //Adding class "block" to div element
      array_el.classList.add("block");
      //Adding dynamic styling for div
      array_el.style.height = `${value * 3}px`;
      array_el.style.transform = `translate(${i * 32}px)`;
      //Creating a label for showing number of size
      const array_el_label = document.createElement("label");
      array_el_label.classList.add("block-id");
      array_el_label.innerText = value;
      //Appending created element to HTML
      array_el.appendChild(array_el_label);
      rootDiv.appendChild(array_el);
   }
}

// let step = 1
// console.log(step)
const Steps = document.createElement("span")
Steps.innerText = 0
compareDiv.appendChild((Steps))

//Promise to swap two blocks
function swap(el1, el2) {
   return new Promise((resolve) => {
      const temp = el1.style.transform;
      el1.style.transform = el2.style.transform;
      el2.style.transform = temp ;
      Steps.innerText = +Steps.innerText + 1

      window.requestAnimationFrame(function () {
         setTimeout(() => {
            rootDiv.insertBefore(el1, el2);
            resolve();
         }, 250);
      });
   });
}

async function BubleSort(delay = 500) {
   let blocks = document.querySelectorAll(".block");

   //Bublesort algorithm
   for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks.length -i - 1; j++) {
        
         //Changing a backgroundColor of compared elements
         blocks[j].style.backgroundColor = "#B2D732";
         blocks[j + 1].style.backgroundColor = "#94B814";

         //To wait for a delay time
         await new Promise((resolve) =>
            setTimeout(() => {
               resolve();
            }, delay)
         );
         console.log("run");
         
         let value1 = Number(blocks[j].childNodes[0].innerHTML);
         let value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
         //Comparing value of 2 elements
         if (value1 > value2) {
            await swap(blocks[j+1], blocks[j]);
            //Saving a swaping of elements
            blocks = document.querySelectorAll(".block");
         }
         
         blocks[j].style.backgroundColor = "#3ab2e2";
         blocks[j + 1].style.backgroundColor = "#3ab2e2";
      }
      //changing the color of greatest element
      blocks[blocks.length -i- 1].style.backgroundColor = "#FB9902";
   }
}

generateArray();

BubleSort(100);
