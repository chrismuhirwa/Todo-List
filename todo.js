const removebtn = document.getElementById("button-remove");
removebtn.addEventListener("click",removeitem);

function removeitem(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
for(let box of checkboxes){
    box.parentElement.remove()
}

}


    const addButton = document.getElementById("button-addon2");
    const list = document.getElementsByClassName("list-group");
    const input = document.getElementsByClassName("form-control");
    console.log(list)

    addButton.addEventListener("click", function(){
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type","checkbox") 
        li.append(checkbox)
        li.classList.add("list-group-item")
        li.append(input[0].value)
        list[0].appendChild(li);
    })
    



