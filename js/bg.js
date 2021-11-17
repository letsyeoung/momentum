/* Background */

// 백그라운드에 사용할 이미지 불러오기
const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];

// 랜덤 이미지 불러오기 (Math 내림 / Ceil 올림)
const choiceImg = (images[Math.floor(Math.random() * images.length)]);

// 백그라운드에 사용 될 앨리먼트 및 스타일 불러오기
const bg = document.getElementById("bg");

// 실행 될 때, 새로운 앨리먼트를 도큐먼트에 만들어주기
const bgImg = document.createElement("img");

// 이미지 주소
bgImg.src = `img/${choiceImg}`;

// 'bg'에 자식 'bgImg' 넣기
bg.appendChild(bgImg);

