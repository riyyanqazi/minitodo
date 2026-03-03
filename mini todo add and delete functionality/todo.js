let todo_list = document.querySelector(".todo-list");
let input = document.querySelector("input");
let ul = document.querySelector(".todo-list");
let add = document.getElementById("add");

add.addEventListener("click", () => {
  let li = document.createElement("li");
  let btn = document.createElement("button");

  btn.innerHTML = "Delete";
  li.innerText = input.value;

  li.append(btn);
  ul.append(li);

  btn.addEventListener("click", () => {
    li.remove();
  });

  input.value = "";
});
