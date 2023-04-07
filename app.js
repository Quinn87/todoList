let userInput = prompt("What would you like to do?");

const todoList = []

while (userInput !== "quit"){
    
    //add items to todoList array
    if (userInput === "new"){
        let newTodo = prompt("Enter new todo");
        todoList.push(newTodo);
        console.log(`${newTodo} added to list`);
    }

    //list todoList array
    if (userInput === "list"){
        console.log("**********")
        for (i = 0; i < todoList.length; i++){
                console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********")
    }

    //delete items from todoList array
    if (userInput === "delete"){
        let deletedItem = parseInt(prompt())
    }

    userInput = prompt("What would you like to do?");
}

console.log("You quit the app");