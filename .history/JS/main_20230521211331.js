const window = document.querySelector(".window");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        console.log(button)
        // const buttonPressed = button.textContent;
        // window.textContent = buttonPressed;
    })
})