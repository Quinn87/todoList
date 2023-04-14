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
    else if (userInput === "list"){
        console.log("**********")
        for (i = 0; i < todoList.length; i++){
                console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********")
    }

    //delete items from todoList array
    else if (userInput === "delete"){
        let deletedItem = parseInt(prompt("Enter the index of todo to delete"));
        todoList.splice(deletedItem, 1);
        console.log("Todo Removed");
    }

    userInput = prompt("What would you like to do?");
}

console.log("You quit the app");