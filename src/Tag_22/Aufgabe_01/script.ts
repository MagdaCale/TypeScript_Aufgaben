

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

const searchInput = document.querySelector<HTMLInputElement>("#searchInput");
const todoList = document.querySelector<HTMLUListElement>("#todoList");
// const searchBtn = document.querySelector<HTMLButtonElement>("#searchBtn");


fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
    .then((data: IToDo[]) => {
        // Aufgaben alphabetisch sortieren und anzeigen
        data.sort((a: IToDo, b: IToDo) => a.title.localeCompare(b.title));
        renderTodos(data);

        // + EventListener zum suchen eines todo's
        // ? "input" sucht direkt nach der Eingabe
        searchInput?.addEventListener("input", () => {
            const searchValue = searchInput?.value.toLocaleLowerCase()
            // console.log(searchValue);
            if (!searchValue) {
                // prüft, ob searchValue leer ist, also entweder undefined oder leerer String
                renderTodos(data); 
                return;
            }
            const filteredTodos = data.filter((todo) => // Iteriert über alle Todos im data-Array.
                todo.title.toLowerCase().includes(searchValue)
                // -> Behält nur die Todos, bei denen die Bedingung true ist.
            );

            renderTodos(filteredTodos); 
        });
    })
    .catch((error) => {
        console.error("Fehler beim Laden der Todo's:", error);
    });

// + hier werden die Aufgaben gerendert und jeh nach Wert farblich ausgegeben
function renderTodos(todos: IToDo[]) {
    if (todoList) {
        todoList.innerHTML = ""; 
        todos.forEach((todo: IToDo) => {
            const li = document.createElement("li");
            li.classList.add("todo");
            li.style.color = todo.completed ? "#1cf31c" : "red"; 
            li.innerHTML = `${todo.completed ? "✅" : "❌"} ${todo.title}`;
            todoList.appendChild(li);
        });
    }
}