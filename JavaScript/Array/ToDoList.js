var todos = [];
var index = 0;

var input = prompt("What would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		todos.forEach(function (todo, i) {
			console.log(i + ": " + todo);
		}
	}
	else {
		todo[index] = prompt("Enter new todo: ");
		index++;
	}
	input = prompt("What would you like to do?");
}