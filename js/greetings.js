/* Greetings */

//도큐먼트에서 불러오기.
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const Formin= document.querySelector("#todo-form");
const h1 = document.querySelector("#greeting h1");
const sign = document.querySelector("#greeting input")



// 로그아웃
function onSign() {
  localStorage.clear("username");
  location.reload(true);
}

sign.addEventListener("click", onSign);



// 엔터 누르면 해당값(이름)을 출력하고 저장하고 숨기기.
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username); //출력하기
  loginForm.classList.add("hidden");
}



// 해당값(이름) 출력하기.
function paintGreetings(username) {
  const date = new Date();
  const hours = date.getHours();
  let mention = `Hello`;

  if(0 <= hours && hours <= 4 || 20 < hours) {
    mention = `Good Night`; //시간이 0시~4시 또는 20시 넘으면
  } else if (hours < 12) {
    mention = `Good Morning`; //시간이 5시 ~ 12시 사이면
  } else {
    mention = `Good Afternoon`;// 시간이 13시 ~ 20시 사이면
  }

  h1.innerText = `${mention}, ${username}`;
  greeting.classList.remove("hidden");
  Formin.classList.remove("hidden");
}



// 사이트에 username 저장 처리
const saveUserName = localStorage.getItem ("username");
  
if(saveUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUserName);
}
