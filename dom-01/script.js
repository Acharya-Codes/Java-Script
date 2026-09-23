const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskContainer = document.getElementById("taskContainer");
addButton.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        const task = document.createElement("div");
        const paragraph = document.createElement("p");
        paragraph.textContent = taskInput.value.trim();
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        task.appendChild(paragraph);
        task.appendChild(deleteButton);
        taskContainer.appendChild(task);
        deleteButton.addEventListener("click", () => {
            task.remove();
        });
        taskInput.value = "";
    } else {
        console.log("Please enter a valid task");
    }
});