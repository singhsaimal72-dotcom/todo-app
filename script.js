let btn = document.getElementById("btn");

let int = document.getElementById("int");

let div = document.getElementById("div");



let task = JSON.parse(localStorage.getItem("task")) || [];



task.forEach(function(item){

    createTask(item);

}
btn.addEventListener("click", function () {

    if(int.value === ""){
        return;
    }

    
    task.push(int.value);

    
    localStorage.setItem("task", JSON.stringify(task));

    
    createTask(int.value);

    
    int.value = "";

});



function createTask(item){

    let p = document.createElement("p");

    p.innerText = item;

    
    let delBtn = document.createElement("button");

    delBtn.innerText = "Delete";

    delBtn.style.background = "red";

    delBtn.style.color = "white";

    delBtn.style.marginLeft = "20px";

    delBtn.style.cursor = "pointer";



    let editBtn = document.createElement("button");

    editBtn.innerText = "Edit";

    editBtn.style.background = "blue";

    editBtn.style.color = "white";

    editBtn.style.marginLeft = "10px";

    editBtn.style.cursor = "pointer";


    
    delBtn.addEventListener("click", function () {

        p.remove();

        
        task = task.filter(function(value){

            return value !== item;

        });

        
        localStorage.setItem("task", JSON.stringify(task));

    });


    
    
editBtn.addEventListener("click", function(){

    let newTask = prompt("Edit task");

    
    if(newTask === null || newTask === ""){
        return;
    }

    
    p.firstChild.textContent = newTask;

});


    
    p.addEventListener("dblclick", function () {

        p.style.textDecoration = "line-through";

    });

    
    p.appendChild(editBtn);

    p.appendChild(delBtn);

    
    div.appendChild(p);

       }
