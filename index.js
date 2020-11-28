// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("toDoListTitle");
appDiv.innerText = `To Do List`;

const listEl = document.getElementById("list");

function toDoList() {
  let list = [
    { name: "task 1", description: "description 1" },
    { name: "task 2", description: "description 2" }
  ];

  function refreshList() {
    if (listEl) {
      listEl.innerHTML = "";

      list.forEach(item => {
        console.log(item.name);
        listEl.innerHTML += "<li>" + item.name + "</li>";
      });
    }
  }

  function addItem(item) {
    list.push(item);
  }

  function removeItem() {
    list.pop();
  }

  return {
    refresh: () => {
      return refreshList();
    },
    getList: () => {
      return list;
    },
    add: item => addItem(item),
    remove: () => removeItem()
  };
}

function onClickAdd() {
  const nextItemIndex = list.getList().length + 2;
  list.add({
    name: "task" + nextItemIndex,
    description: "description" + nextItemIndex
  });
}

const list = toDoList();
list.refresh();
