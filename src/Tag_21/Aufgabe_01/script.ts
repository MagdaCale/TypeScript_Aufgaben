

type IToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => res.json())
// .then ((data: IToDo[]) =>{
//     console.log(data);
// })  


const todoList = document.querySelector<HTMLUListElement>("#todoList");
const todoUrl = "https://jsonplaceholder.typicode.com/todos";

fetch(todoUrl)
.then((res) => res.json())
.then((data: IToDo[]) => {
    data.sort((a: IToDo, b: IToDo) => a.title.localeCompare(b.title));
    data.forEach((todo: IToDo) => {
        const li = document.createElement("li");
        li.classList.add("todo");
        // li.style.color = todo.completed ? "green" : "red"; 
        li.innerHTML = `${todo.completed ? "✅" : "❌"} ${todo.title}`;
        todoList?.appendChild(li);
    });
});