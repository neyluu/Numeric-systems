const calculatorButton = document.querySelector(".calc")
const converterButton = document.querySelector(".converter")

calculatorButton.addEventListener("click", () => {
    document.querySelector(".converter-tab").style.transform = "translateX(0)"
    document.querySelector(".calculator-tab").style.transform = "translateX(0)"
})
converterButton.addEventListener("click", () => {
    document.querySelector(".converter-tab").style.transform = "translateX(100%)"
    document.querySelector(".calculator-tab").style.transform = "translateX(100%)"
})
