const window = document.querySelector(".win");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const buttonPressed = button.textContent;

        window.textContent = buttonPressed;
    })
})