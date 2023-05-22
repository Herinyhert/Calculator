const result = document.querySelector(".window");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const buttonPressed = button.textContent;

        if(button.id === "c"){
            result.textContent = "0";
            return;
        }

        if(button.id === "delete"){
            if(result.textContent.length === 1){
                result.textContent = "0"
            }else{
                result.textContent = result.textContent.slice(0,-1);
            }
            return
        }

        if(button.id === )

        if(result.textContent === "0"){
            result.textContent = buttonPressed
        }else{
            result.textContent += buttonPressed;
        }
    })
})