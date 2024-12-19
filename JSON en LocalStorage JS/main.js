//Oefening1
const person = {
    name: "Tugche",
    age: 19,
    hobbies: ["Muziek luisteren", "computer spelen", "programmeren"]
};
const personJSON = JSON.stringify(person);
console.log(personJSON);

//Oefening2
const jsonString = '{"name":"Tugche","age":19,"hobbies":["Muziek luisteren", "computer spelen", "programmeren"]}'
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);
console.log(parsedPerson.name);
console.log(parsedPerson.hobbies[1]);

//Oefening3
localStorage.setItem("person", personJSON);

//Oefening4
const storedPersonJSON = localStorage.getItem("person");
console.log(storedPersonJSON);

const storedPerson = JSON.parse(storedPersonJSON);
console.log(storedPerson);

console.log(storedPerson.name);
console.log(storedPerson.hobbies);

//Oefening5
const tasks = [
    { id: 1, description: "Boodschappen doen", completed: true },
    { id: 2, description: "wandelen", completed: false },
    { id: 3, description: "code schrijven", completed: true },
];
const tasksJSON = JSON.stringify(tasks);
localStorage.setItem("tasks", tasksJSON);

const storedTasksJSON = localStorage.getItem("tasks");
const storedTasks = JSON.parse(storedTasksJSON);
    console.log(storedTasks);

storedTasks.forEach(task => console.log(task.description));

//Bonus Oefening
localStorage.removeItem("person");

localStorage.clear();
