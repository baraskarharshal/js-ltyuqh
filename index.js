// Import stylesheets
import "./style.css";

const appDiv = document.getElementById("toDoListTitle");
appDiv.innerText = `To Do List`;
const listEl = document.getElementById("list");
const addBtnEl = document.getElementById("addBtn");
const removeBtnEl = document.getElementById("removeBtn");

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
        listEl.innerHTML +=
          "<li class='list-group-item'>" + item.name + "</li>";
      });
    }
  }

  // if (addBtnEl) {
  //   addBtnEl.addEventListener("click", () => {
  //     const nextItemIndex = list.length + 1;
  //     addItem({
  //       name: "task" + nextItemIndex,
  //       description: "description" + nextItemIndex
  //     });
  //     refreshList();
  //   });
  // }

  if (removeBtnEl) {
    removeBtnEl.addEventListener("click", () => {
      removeItem();
      refreshList();
    });
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
  alert("add clicked");
}

const list = toDoList();
list.refresh();
