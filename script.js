const music = document.getElementById('bgMusic');

function openInvitation(){

document.querySelector('.cover').style.opacity='0';

setTimeout(()=>{

document.querySelector('.cover').style.display='none';

document.getElementById('content').style.display='block';

document.getElementById('content').style.animation='fadeIn 1s ease';

},500);

music.play().catch(()=>{
console.log('Autoplay diblokir browser');
});

}

/* Tombol Musik */

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

/* Nama Tamu dari URL */

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if(guest){

document.getElementById("guestName").innerHTML =

"Kepada Yth.<br><strong>" +
decodeURIComponent(guest) +
"</strong>";

}

/* Countdown */

const targetDate =

new Date("June 8, 2026 14:00:00").getTime();

const countdown = document.getElementById("countdown");

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

if(distance < 0){

clearInterval(timer);

countdown.innerHTML =
"🎉 Acara Sedang Berlangsung";

return;

}

const days =
Math.floor(distance / (1000*60*60*24));

const hours =
Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

const minutes =
Math.floor((distance % (1000*60*60)) / (1000*60));

const seconds =
Math.floor((distance % (1000*60)) / 1000);

countdown.innerHTML =

days + " Hari<br>" +
hours + " Jam<br>" +
minutes + " Menit<br>" +
seconds + " Detik";

},1000);
