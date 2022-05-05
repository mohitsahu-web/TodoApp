let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener('keydown', function(e) {
    // console.log(e);
    let key = e.key;
    if (key == 'Enter') {
        let value = inputTag.value;
        // console.log(value);
        inputTag.value = "";
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div>${value}</div>
                          <button type="button" class="btn btn-danger">Delete</button>`

        //other way
        // liTag.innerHTML = "<div>" + value + "</div><div><i class='fa fa-trash'></i></div>" 
        handleRemoval(liTag);
        ulTag.appendChild(liTag);
    }
})

function handleRemoval(liTag) {
    let deleteDiv = liTag.querySelector(".btn.btn-danger");
    deleteDiv.addEventListener("click", function() {
        liTag.remove();
    })
}