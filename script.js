// ========================================================
// 1. SISTEM BACA NAMA TAMU OTOMATIS DARI LINK (?to=Nama+Tamu)
// ========================================================
const urlParams = new URLSearchParams(window.location.search);
const guestNameParam = urlParams.get('to');
const guestDiv = document.getElementById('guestName');

if (guestNameParam) {
    // Mengubah simbol %20 atau + dari link menjadi spasi teks normal
    const cleanName = decodeURIComponent(guestNameParam);
    guestDiv.innerHTML = `<p>Kepada Yth. Bapak/Ibu/Saudara/i</p><h4>${cleanName}</h4>`;
} else {
    guestDiv.innerHTML = `<p>Kepada Yth. Bapak/Ibu/Saudara/i</p><h4>Tamu Undangan</h4>`;
}

// ========================================================
// 2. LOGIKA ANIMASI BUKA UNDANGAN & AUDIO MULAI
// ========================================================
const cover = document.querySelector('.cover');
const content = document.getElementById('content');
const bgMusic = document.getElementById('bgMusic');

function openInvitation() {
    // Jalankan efek slide-up ke atas pada cover
    cover.classList.add('slide-up');
    
    // Tampilkan blok isi konten website utama
    content.style.display = 'block';

    // Nyalakan musik latar belakang
    bgMusic.play().catch(error => {
        console.log("Browser memblokir autoplay otomatis. Musik diaktifkan manual via interaksi.", error);
    });

    // Singkirkan elemen cover sepenuhnya dari screen setelah animasi beres (1.2 detik)
    setTimeout(() => {
        cover.style.display = 'none';
        document.body.style.overflow = 'auto'; // Mengizinkan scroll kembali
    }, 1200);
}

// Mengunci scroll layar selama user masih berada di halaman depan (cover)
document.body.style.overflow = 'hidden';

// ========================================================
// 3. TOMBOL KONTROL AUDIO (PLAY / PAUSE FLOATING)
// ========================================================
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

// ========================================================
// 4. HITUNG MUNDUR WAKTU NYATA (REAL-TIME COUNTDOWN)
// ========================================================
// Menetapkan target waktu: 8 Juni 2026 jam 14:00 WITA (Zona UTC+8)
const targetDate = new Date("2026-06-08T14:00:00+08:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Rumus matematika konversi milidetik ke hari, jam, menit, detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    if (!countdownElement) return;

    // Jika hari bahagia sudah terlewati/berlangsung
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "<h4 style='font-style: italic;'>Acara Sedang Berlangsung / Telah Selesai</h4>";
    } else {
        // Tampilkan box hitung mundur digital
        countdownElement.innerHTML = `
            <div class="cd-box"><span>${days}</span><small>Hari</small></div>
            <div class="cd-box"><span>${hours}</span><small>Jam</small></div>
            <div class="cd-box"><span>${minutes}</span><small>Menit</small></div>
            <div class="cd-box"><span>${seconds}</span><small>Detik</small></div>
        `;
    }
}, 1000);
