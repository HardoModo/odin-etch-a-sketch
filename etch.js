const container = document.getElementById("container")

for(i = 0; i < 16; i++) {
    var rowDiv = document.createElement("div")
    rowDiv.setAttribute("id", "rowDiv")

    test()

    container.appendChild(rowDiv)
}

function test() {
    for(x = 0; x < 16; x++) {
        var columnDiv = document.createElement("div")
        columnDiv.setAttribute("id", "columnDiv")
        rowDiv.appendChild(columnDiv)
    }
}
