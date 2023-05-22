const result = document.querySelector(".window");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const buttonPressed = button.textContent;
        if(result.textContent === "0"){
            pana
        }
        result.textContent += buttonPressed;
    })
})