let newTaskAdd = document.getElementById("newTaskAdd");
let newTaskInput = document.getElementById("newTaskInput");
let tasks = document.getElementById("tasks");

newTaskAdd.addEventListener('click', (e) =>{
    e.preventDefault();
    var task = document.createElement('li');
    task.classList.add("task");

    var checkbox = document.createElement("input");
    checkbox.classList.add("checkBox");
    checkbox.setAttribute("type", "checkbox");
    task.appendChild(checkbox);

    var textField = document.createElement("div");
    textField.classList.add("textField");
    var textValue = document.createElement('input');
    textValue.classList.add("text");
    textValue.value = newTaskInput.value;
    textValue.setAttribute('readonly', 'readonly');
    textField.appendChild(textValue);
    task.appendChild(textField);

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    task.appendChild(deleteButton);
    tasks.appendChild(task);

    deleteButton.addEventListener('click', (e) =>{
        e.preventDefault();
        tasks.removeChild(task);
    })

    checkbox.addEventListener('change', (e) => {
        if(e.target.checked){
            textValue.style = "text-decoration: line-through";
        }
        else{
            textValue.style = "text-decoration: none";
        }
    })
})
