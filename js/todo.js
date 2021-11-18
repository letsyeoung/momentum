/* todo */


// 앨리먼트 불러오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

// 투두 삭제 추가 때문에 let 선언
let toDos = [];


// 투두저장 localstorage
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// 투두삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

// 투두 리스트 생성 및 출력
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;

  //투두 삭제버튼 
  const button = document.createElement("button");
  button.innerText = `✓` 
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener ("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value=""; 
  const newToDoObj = {
    text : newToDo,
    id : Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}


// 투두 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// 이벤트 처리
toDoForm.addEventListener("submit", handleToDoSubmit);