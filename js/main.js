// Footer Year Change 

const Z = new Date()
let year = Z.getFullYear()
    document.getElementById("Year").outerHTML = year

// Alert

const send = document.querySelector("#btn-alert")
    let sent = "Hello World!"
    send.addEventListener("click", () => {
        alert(sent)
    })

// Button hover

const Hover = document.querySelector("#btn-alert")
    Hover.addEventListener("mouseover", () =>{
        Hover.style.backgroundColor = "red"
        if(Hover.addEventListener("mouseout", () =>{
            Hover.style.backgroundColor = ""
        })){
    }})

    // Button hover change

    const element = document.getElementById("btn-alert")

    element.onmouseover = () => {
        element.innerText = "WOW!"

    element.onmouseleave = () => {
        element.innerText = "Click me!"
    }}
    
    // Incrementing button

let count = 0;
const textCounter = document.getElementById("Up")
const incrementor = document.getElementById("Counter")
textCounter.addEventListener("click", () => {
count++;
incrementor.textContent = count.toString()
if (count % 2 == 0) {
    incrementor.classList.add("Even")
    incrementor.classList.remove("Odd")
} else {
    incrementor.classList.add("Odd")
    incrementor.classList.remove("Even")
}

});

// Loop

const numberList = document.getElementById("numbers")

for (let index = 1; index <= 100; index++) {
    const newListItem = document.createElement("li")

    const even = index % 2 == 0

    newListItem.innerHTML = even ? "Even" : "Odd"

    numberList.appendChild(newListItem)

    if (even) newListItem.classList.add("even")
    else newListItem.classList.add("odd")

};
