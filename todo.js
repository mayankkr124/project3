const taskbox = document.querySelector(".taskbox");
const warning = document.querySelector(".warning");
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const update = document.querySelector("#update");
const mark = document.querySelector("#mark");
const clear = document.querySelector("#clear");
const list = document.querySelector(".list");
let count = 0;
taskbox.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        add.click();
    }
})
add.addEventListener("click", (e) => {
    e.preventDefault()
    if(taskbox.value != ""){
        count++;
        let newcheck = document.createElement("input");
        newcheck.type = "checkbox";
        newcheck.id = `checkbox${count}`
        let newTask = document.createElement("p");
        newTask.id = `task${count}`
        newTask.textContent = `${taskbox.value}`;
        list.appendChild(newcheck)
        list.appendChild(newTask)
        taskbox.value = ""
        warning.innerHTML = ""
    }
    else{
        warning.innerHTML = "Please mention a task to add!";
    }
})

del.addEventListener("click", (e) =>{
    e.preventDefault()
    for(i = 1; i<=count; i++){
        let checkbox = document.querySelector(`#checkbox${i}`)
        if(checkbox && checkbox.checked){
            let task = document.querySelector(`#task${i}`)
            if(task){
                checkbox.remove()
                task.remove()
            }
        }
    }
})

mark.addEventListener("click", (e) =>{
    e.preventDefault()
    for(i = 1; i<=count; i++){
        let checkbox = document.querySelector(`#checkbox${i}`)
        if(checkbox && checkbox.checked){
            let task = document.querySelector(`#task${i}`)
            if(task){
                task.classList.add("mark");
            }
        }
    }
})

clear.addEventListener("click", (e) => {
    e.preventDefault()
    count = 0
    list.innerHTML = ""
})