const rootDiv = document.querySelector("#root");

export class GenerateArray {
   constructor(quantity = 20) {
      this.quantity = quantity;
   }
   render() {
      for (let i = 0; i < this.quantity; i++) {
         const value = Math.ceil(Math.random() * 100);
         const array_el = document.createElement("div");
         array_el.classList.add("block");
         array_el.style.height = `${value * 3}px`;
         array_el.style.transform = `translate(${i * 32}px)`;
         const array_el_label = document.createElement("label");
         array_el_label.classList.add("block-value");
         array_el_label.innerText = value;
         array_el.appendChild(array_el_label);
         rootDiv.appendChild(array_el);
      }
   }
}


