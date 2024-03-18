let input = document.getElementById("taskInput");
let btn = document.querySelector(".add");
let ul = document.getElementById("taskList");

btn.addEventListener("click", addTask)


function addTask(){
    let taskText = input.value.trim();
    if(taskText !== ""){
        let li = document.createElement("li");
        li.textContent = taskText;
        let delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.className = "delete"
        li.appendChild(delBtn);
        delBtn.onmouseover = function(){
            li.style.backgroundColor = "rgb(229, 119, 119)";
        }
        delBtn.onmouseleave = function(){
            li.style.backgroundColor = "rgb(232, 191, 232)";
        }
        delBtn.onclick = function(){
            
            li.classList.add("slideOutAnimation");
            setTimeout(() => {
                li.remove();
            }, 500); 
        };
        
        if (ul.firstChild) {
            ul.insertBefore(li, ul.firstChild);
        } else {
            ul.appendChild(li);
        }
        input.value = "";
    }

}