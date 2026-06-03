const urlParams = new URLSearchParams(window.location.search);
const guestNameParam = urlParams.get('to');
const guestDiv = document.getElementById('guestName');

if (guestNameParam) {
    const cleanName = decodeURIComponent(guestNameParam);
    guestDiv.innerHTML = `<p>Kepada Yth. Bapak/Ibu/Saudara/i</p><h4>${cleanName}</h4>`;
} else {
    guestDiv.innerHTML = `<p>Kepada Yth. Bapak/Ibu/Saudara/i</p><h4>Tamu Undangan</h4>`;
}

const cover = document.querySelector('.cover');
const content = document.getElementById('content');
const bgMusic = document.getElementById('bgMusic');

function openInvitation() {
    cover.classList.add('slide-up');
    content.style.display = 'block';

    bgMusic.play().catch(error => {
        console.log("Autoplay diblokir browser, musik bisa dinyalakan manual via tombol.");
    });

    setTimeout(() => {
        cover.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }, 1200);
}

document.body.style.overflow = 'hidden';

function toggleMusic() {
    const btn = document.querySelector('.music-btn');
    if (bgMusic.paused) {
        bgMusic.play();
        btn.innerHTML = "🎵 Musik: ON";
    } else {
        bgMusic.pause();
        btn.innerHTML = "🔇 Musik: OFF";
    }
}

// Target Waktu: 8 Juni 2026 jam 14:00 WITA
const targetDate = new Date("2026-06-08T14:00:00+08:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    if (!countdownElement) return;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "<h4 style='font-style: italic;'>Acara Sedang Berlangsung / Telah Selesai</h4>";
    } else {
        countdownElement.innerHTML = `
            <div class="cd-box"><span>${days}</span><small>Hari</small></div>
            <div class="cd-box"><span>${hours}</span><small>Jam</small></div>
            <div class="cd-box"><span>${minutes}</span><small>Menit</small></div>
            <div class="cd-box"><span>${seconds}</span><small>Detik</small></div>
        `;
    }
}, 1000);
