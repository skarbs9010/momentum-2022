const clock = document.querySelector("h2#clock");
const today = document.querySelector("h1#today");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDay());
    today.innerText = `${year}년 ${month}월 ${day}일`;
}

getClock(); 
setInterval(getClock, 1000);
