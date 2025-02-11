console.clear()

const todoForm = document.querySelector("#todo-form");
const editForm = document.querySelector("#edit-form");
const todoList = document.querySelector("#todo-list");

const todoInput = document.querySelector("#todo-input");
const editInput = document.querySelector("#edit-input");

const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const searchInput = document.querySelector("#search-input");

const eraseBtn = document.querySelector("#erase-button");

const filterBtn = document.querySelector("#filter-select")

let oldInputValue;
//Funções

const saveTodo = (text, done=0, save=1) =>{
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3");

    todoTitle.innerText=text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")

    doneBtn.classList.add("finish-todo")

    doneBtn.innerHTML='<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button")

    editBtn.classList.add("edit-todo")

    editBtn.innerHTML='<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);
    const removeTodo = document.createElement("button")

    removeTodo.classList.add("remove-todo")

    removeTodo.innerHTML='<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeTodo);

    //adicionando ao local storage

    if(done) todo.classList.add("done");

    if(save) saveTodoLocalStorage({text:text, done:0});

    todoList.appendChild(todo);

    todoInput.value="";
    todoInput.focus();


}

const toggleForm = (()=>{
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
})

const updateTodo = ((str)=>{
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo)=>{
        let todoTitle = todo.querySelector("h3");
        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText=str;
            updateTodoLocalStorage({text:oldInputValue}, {text:str});
        }
    })
})


const getSearchTodos = ((search)=>{
    todos = document.querySelectorAll(".todo");
    console.log(search);

    let normalized=search.toLowerCase().trim();


    todos.forEach((todo)=>{
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase().trim();

        todo.style.display="flex"

        if (!todoTitle.includes(normalized)){
            todo.style.display="none";
        }

    })
})

const filterTodos = ((selected) =>{
    todos = document.querySelectorAll(".todo");
    console.log(selected);

    switch (selected) {

        case "all":
            todos.forEach((td)=>td.style.display="flex");

            break;
            
        case "done":
            todos.forEach((td)=>{
                td.style.display="flex";
                if (!td.classList.contains("done")){
                    td.style.display="none";
                }
            })
            break;

        case "todo":
            todos.forEach((td)=>{
                td.style.display="flex";
                if (td.classList.contains("done")){
                    td.style.display="none";
                }
            })
        default:
            break;
    }
 
})

//Eventos
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const inputValue = todoInput.value;
    
    if(!inputValue) return;

    console.log("Enviou");


    saveTodo(inputValue);
})


document.addEventListener("click", (e)=>{
    //Estes eventos estão mais ligados aos estilos
    const targetElement = e.target;
    const parentElement=targetElement.closest("div");

    let todoTitle;
    
    if(parentElement && parentElement.querySelector("h3")){
        todoTitle = parentElement.querySelector("h3").innerText;
    }


    if(targetElement.classList.contains("finish-todo")){
    console.log("Clicou no done")
    parentElement.classList.toggle("done")
    updateTodoLocalStorage({
        //Antigo
        text:todoTitle,
        },

        {//Novo
        text:todoTitle, 
        done:parentElement.classList.contains("done")?1:0
        })
    }

    if(targetElement.classList.contains("edit-todo")){
    toggleForm();
    editInput.value=todoTitle;
    oldInputValue=todoTitle;
    console.log("Clicou no edit")

    }

    if(targetElement.classList.contains("remove-todo")){
    console.log("Clicou no remove")
    parentElement.remove();
    removeTodoLocalStorage(todoTitle);
    }


})

cancelEditBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    toggleForm();
})

editForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue);//aq nos de fato atualizamos
        
    }
    toggleForm();
})

searchInput.addEventListener("keyup", (e)=>{
    const search = e.target.value;
    console.log(search)
    getSearchTodos(search);
})

eraseBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    searchInput.value="";
    searchInput.dispatchEvent(new Event("keyup"));
})

filterBtn.addEventListener("change", (e)=>{
    let selectedValue = e.target.value;
    console.log(selectedValue);
    filterTodos(selectedValue);
    
})


//Local storage 

const getTodosLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem("todos")) || [];
}

const saveTodoLocalStorage = ((todo)=>{//{text:text, done:0}
  
    //todos os todos da ls
    const todos = getTodosLocalStorage();

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos))


    //add novo td
    //salvar td
})

const loadTodos = () =>{
    const todos = getTodosLocalStorage();
    todos.forEach((td)=>{
        saveTodo(td.text, td.done, 0);//nao vai salvar os que estamos adicionando
    })
}


const removeTodoLocalStorage = ((todoText)=>{
    const todos = getTodosLocalStorage();
    const filtered = todos.filter((td)=>td.text!==todoText)
    localStorage.setItem("todos", JSON.stringify(filtered));
    console.log(filtered);
})

const updateTodoLocalStorage = ((old, updated)=>{
    const todos = getTodosLocalStorage();
    console.log(old, updated);
    
    const editedTodos = todos.map((td)=>{
        if(td.text !== old.text) return;

        if(updated.done === undefined) {
            console.log(`Trocando apenas o texto ${old.text}  por ${updated.text} `);
            td.text=updated.text
            return td;
        }
        console.log(`Trocando tudo ${old.text} ${old.done} por ${updated.text} ${updated.done}`);
        td=updated;
        return td;
        
    })
    localStorage.setItem("todos", JSON.stringify(editedTodos))
});
loadTodos();