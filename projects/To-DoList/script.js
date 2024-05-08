const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask(){
  //Shows a pop-up error when the input field is empty
    if(inputBox.value === ''){
        alert("Field is empty, Text required.");
    }
    //Allow user to add task
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//Check and uncheck tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Saves the tasklist locally
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Loads the tasks locally
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
