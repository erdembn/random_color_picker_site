let colorFrame = document.getElementById("color");
let btn = document.getElementById("btn");
let colorCode = document.getElementById("color-code");

const randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    console.log(color)
    return color;

}

const changeColor = () => {
    let newColor = randomColor()
    colorFrame.style.backgroundColor = "#" + newColor;
    colorCode.innerText = "rgb code: " + colorFrame.style.backgroundColor + "\n\n" + "hex code: #" + newColor;

}

btn.addEventListener("click", () => {
    changeColor();

});

