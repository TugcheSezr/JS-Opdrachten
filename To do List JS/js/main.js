//1.oefening
let tasks = [];
console.log(tasks);

//2.oefening
function makeTask() {
    const description = prompt("Voer een taakbeschrijving in:");
    return {
        id: Date.now(),
        description: description,
        completed: false
    };
}

const task = makeTask();
console.log(task);

//3.oefening
const newTask = makeTask();
tasks.push(newTask);
console.log(tasks);

//4.oefening
function displayTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`ID: ${tasks[i].id}, Beschrijving: ${tasks[i].description}, Vo`);
    }
}

//5.oefening
function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksJSON);
}

//6.oefening
function loadTasks() {
    const tasksJSON = localStorage.getItem("tasks");
    //check of er wel een waarde is.
    if (tasksJSON) {
        //zet de bestaande JSON taken om in een array
        return JSON.parse(tasksJSON);
    } else {
        //maak een lege array en geef deze terug
        return [];
    }
}
tasks = loadTasks();
console.log(tasks);

//7.oefening
function completeTask(tasks, id) {
    for(let i= 0; i<tasks.length; i++){
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            break;
        }
    }
}
saveTasks(tasks);

//8.oefening
function removeTask(tasks2 , id){
    const updateTasks = [];
    for(let i = 0; i < tasks2.length; i++) {
        if(tasks2[i].id !== id) {
            updateTasks.push(tasks2[i]);
        }
    }
    return updateTasks
}
let tasks2 = [
    { id: 1, title: 'Boodschappen doen', completed: false},
    { id: 2, title: 'Wandelen', completed: true},
    { id: 3, title: 'Werken', completed: true},
];

const idToRemove = prompt('Vult hier een ID:');
tasks2 = removeTask(tasks2, parseInt(idToRemove));
console.log(tasks2);