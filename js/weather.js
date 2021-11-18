/* weather */

// API KEY
const API_KEY = "9afdd8a0014b27723ffa73684f3f1c00";

// 날씨 불러오기 성공했을 때.
function onGeoOk(position) {
  const lat = position.coords.latitude; // 사용자가 사는 곳 위도
  const lon = position.coords.longitude; // 사용자가 사는 곳 경도
  
  //위치 주소
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  //위치정보 얻어서 출력하기
  fetch(url)
  .then(response => response.json())
  .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = data.main.temp
  });
}


// 날씨 불러오기 실패했을 때.
function onGeoError() {
  alert("Can't find you, NO weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);




