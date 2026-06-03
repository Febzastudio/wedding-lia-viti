// 1. Menampilkan Nama Tamu dari URL Parameter
// Jika link yang disebar adalah: www.undangan.com/?to=Keluarga+Budi
const urlParams = new URLSearchParams(window.location.search);
const guestNameParam = urlParams.get('to');
const guestDiv = document.getElementById('guestName');

if (guestNameParam) {
    guestDiv.innerHTML = `<p>Kepada Yth.</p><h4>${guestNameParam}</h4>`;
} else {
    guestDiv.innerHTML = `<p>Kepada Yth.</p><h4>Tamu Undangan</h4>`;
}

// 2. Fungsi Membuka Undangan & Memutar Musik
const cover = document.querySelector('.cover');
const content = document.getElementById('content');
const bgMusic = document.getElementById('bgMusic');

function openInvitation() {
    // Memberikan efek animasi naik ke atas
    cover.classList.add('slide-up');
    
    // Menampilkan konten utama
    content.style.display = 'block';

    // Memutar musik
    bgMusic.play().catch(error => {
        console.log("Autoplay musik dicegah oleh browser. Pengguna harus menekan tombol play.", error);
    });

    // Menghapus elemen cover dari background setelah animasi selesai (1 detik)
    setTimeout(() => {
        cover.style.display = 'none';
    }, 1000);
}

// 3. Fungsi Toggle Musik (Play / Pause)
function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
}

// 4. Hitung Mundur (Countdown) ke 08 Juni 2026, 14:00 WITA
const targetDate = new Date("June 8, 2026 14:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Kalkulasi Waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    // Tampilkan hasil
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "<h3>Acara Sedang Berlangsung / Telah Selesai</h3>";
    } else {
        countdownElement.innerHTML = `
            <div class="cd-box"><span>${days}</span><small>Hari</small></div>
            <div class="cd-box"><span>${hours}</span><small>Jam</small></div>
            <div class="cd-box"><span>${minutes}</span><small>Menit</small></div>
            <div class="cd-box"><span>${seconds}</span><small>Detik</small></div>
        `;
    }
}, 1000);
