var grid = 16

const container = document.getElementById("container")

for(i = 0; i < grid; i++) {
    var rowDiv = document.createElement("div")
    rowDiv.setAttribute("id", "rowDiv")

    addColumnDiv()

    container.appendChild(rowDiv)
}

function addColumnDiv() {
    for(x = 0; x < grid; x++) {
        var columnDiv = document.createElement("div")
        columnDiv.setAttribute("id", "columnDiv")
        rowDiv.appendChild(columnDiv)
    }
}

function fun() {
    console.log("It worked!")
    columnDiv.setAttribute("id","test")
}

var allColumnDiv = document.querySelector("#columnDiv")

allColumnDiv.addEventListener("click", fun)