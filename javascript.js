
const container = document.querySelector(".container");
let buttonSize = 500;





function buildCanvas(buttonSize) {
    const containerSize = 500;
    const squareSize = Math.floor((containerSize - (buttonSize -1))/ buttonSize);
    let loopvar = buttonSize * buttonSize

        for (var j = 1; j <=loopvar; j++) {
            const canvas = document.createElement("div");
            canvas.classList.add("canvas-div");
            canvas.style.width = `${squareSize}px`;
            canvas.style.height = `${squareSize}px`;
            canvas.style.flex = "1 0 auto";
            
            container.appendChild(canvas);
            console.log("appended");

        }


      

        
}

buildCanvas(buttonSize);

const myDiv = document.querySelectorAll('.canvas-div');
myDiv.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'yellow';
      });
});