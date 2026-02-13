function addTask() {
    const input = document.getElementById("in");
    const list = document.getElementById("list");

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        list.removeChild(li);
    });

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = "";
}
