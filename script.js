function openInvitation(){

document.querySelector('.cover').style.display='none';
document.getElementById('content').style.display='block';

const music=document.getElementById('bgMusic');

music.play().catch(()=>{
console.log("Autoplay diblokir browser");
});

}

const targetDate =
new Date("June 8, 2026 14:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+" Hari "+
hours+" Jam "+
minutes+" Menit "+
seconds+" Detik";

},1000);
