
let changeColor = document.querySelector(".background-color .circle")
let toDoList = document.querySelector(".to-do-list")

changeColor.addEventListener("click", (el) => {
        changeColor.classList.toggle("black")
        if (changeColor.classList.contains("black")){
            document.body.style.backgroundImage= "url(./img/black3.jpg)"
            toDoList.style.backgroundColor="#2b2b2b78"
            document.querySelector(".background-color").style.backgroundColor = "white"
            let delAllTask = document.querySelector(".to-do-list .tasks button")
            delAllTask.style.backgroundImage="url(./img/wood2.jpg)"
            let addBtn = document.querySelector(".to-do-list  .container .new-task button")
            addBtn.style.backgroundImage="url(./img/wood2.jpg)"
            let li = document.querySelectorAll(".to-do-list .tasks .perant li")
          }else{
                let delAllTask = document.querySelector(".to-do-list .tasks button")
                delAllTask.style.backgroundImage=""
                delAllTask.style.backgroundColor="#589BAC"
                let addBtn = document.querySelector(".to-do-list  .container .new-task button")
                addBtn.style.backgroundImage=""
                delAllTask.style.backgroundColor="#589BAC"
                document.body.style.backgroundImage= "url(./img/white.jpg)"
                toDoList.style.backgroundImage=""
                toDoList.style.backgroundColor="#c57400e8"
                let li = document.querySelectorAll(".to-do-list .tasks .perant li")
    }
})
// //////////////////////////////////////////////////////////////////////////
let input = document.querySelector(".to-do-list  .container .new-task input")
let ul = document.querySelector(".to-do-list .container .tasks .perant")
let addBtn = document.querySelector(".to-do-list  .container .new-task button")
let delAllTask = document.querySelector(".to-do-list .tasks button")
///////////////////////////////////////////////////////////////////////////

array = []

if (localStorage.getItem("task")) {
    array = JSON.parse(localStorage.getItem("task"))
}

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
        delTaskFromStorg(e.target.parentElement.getAttribute("deta-id"))
    }
})

getDataFromStorg()


addBtn.addEventListener("click", () => {
    if (input.value !== "") {
        addTaskToArray(input.value)
        input.value = ""
    }
})

function addTaskToArray(task) {
    let taskObject = {
        id: Date.now(),
        title: task,
        completed: false,

    };
    array.push(taskObject)
    addTaskToList(array)
    addTaskToStorge(array)
}

function addTaskToList(array) {
    ul.innerHTML = ""
    array.forEach((taskObject) => {
        let li = document.createElement("li")
        li.className = "task"
        li.setAttribute("deta-id", taskObject.id)
        li.appendChild(document.createTextNode(taskObject.title))
        ul.appendChild(li)
        let del = document.createElement("span")
        del.className = "del"
        li.appendChild(del)
        li.addEventListener("click", () => {
            li.classList.toggle("done")

        })

    })
}

function addTaskToStorge(tasks) {
    window.localStorage.setItem("task", JSON.stringify(tasks))
}

function getDataFromStorg() {
    let data = window.localStorage.getItem("task")
    if (data) {
        let tasks = JSON.parse(data)
        addTaskToList(tasks)
    }

}



function delTaskFromStorg(taskId) {
    array = array.filter((task) => task.id != taskId)
    addTaskToStorge(array)
}


delAllTask.addEventListener("click", () => {
    alert("I Will Delete All Tasks And Will Not Be Able To Access Them Again ")
    let confir = confirm("Are You Sure")
    if (confir) {
        window.localStorage.clear()
        ul.innerHTML = ""
        array = []
    }

})






































// addBtn.addEventListener("click", () => {
//     if (newTask.value !== "") {
//         addTaskToTaskList(newTask.value)
//         newTask.value = "";
//     }

// })



// function addTaskToTaskList() {
//     let li = document.createElement("li")
//     li.innerHTML = newTask.value
//     parent.append(li)
// }








































// let li = document.createElement("li")
// let tasksArray = []

// if (localStorage.getItem("task")) {
//     tasksArray = JSON.parse(localStorage.getItem("task"))
// }


// newTask.addEventListener("change", () => {

//     addBtn.onclick = () => {
//         parent.append(li)
//         li.innerHTML = `${newTask.value}`
//         newTask.value = ""
//     }
//     addTaskToArray(newTask.value)
//     addTaskToStorg(tasksArray)
//     getDataFromStorg()
// })

// function addTaskToArray(task) {
//     task = {
//         id: Date.now(),
//         title: newTask.value,
//     }
//     tasksArray.push(task)

// }

// function addTaskToStorg(arrayofTasks) {
//     window.localStorage.setItem("task", JSON.stringify(arrayofTasks))
// }


// function getDataFromStorg() {
//     let data = window.localStorage.getItem("task")
//     if (data) {
//         let tasks = JSON.parse(data)
//         li.innerHTML = tasks
//     }
// }




