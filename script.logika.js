// Inisialisasi Variabel Game
let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let sisaKesempatan = 10;

function cekTebakan() {
    const inputElement = document.getElementById('inputTebak');
    const pesanElement = document.getElementById('pesan');
    const infoSisaElement = document.getElementById('infoSisa');
    const btnTebak = document.getElementById('btnTebak');
    const btnReset = document.getElementById('btnReset');
    const formTebak = document.getElementById('formTebak');

    const tebakan = parseInt(inputElement.value);

    // Validasi Input
    if (isNaN(tebakan) || tebakan < 1 || tebakan > 100) {
        pesanElement.style.color = '#f87171';
        pesanElement.textContent = '⚠️ Masukkan angka yang valid (1 - 100)!';
        return;
    }

    sisaKesempatan--;

    // Logika Permainan
    if (tebakan === angkaRahasia) {
        pesanElement.style.color = '#34d399';
        pesanElement.textContent = `🎉 Selamat! Anda benar, angkanya adalah ${angkaRahasia}.`;
        akhiriGame();
    } else if (sisaKesempatan === 0) {
        pesanElement.style.color = '#f87171';
        pesanElement.textContent = `❌ Game Over! Angka rahasianya adalah ${angkaRahasia}.`;
        akhiriGame();
    } else if (tebakan < angkaRahasia) {
        pesanElement.style.color = '#fbbf24';
        pesanElement.textContent = '📈 Terlalu kecil! Coba angka yang lebih besar.';
        infoSisaElement.textContent = `Sisa Kesempatan: ${sisaKesempatan}`;
    } else {
        pesanElement.style.color = '#fbbf24';
        pesanElement.textContent = '📉 Terlalu besar! Coba angka yang lebih kecil.';
        infoSisaElement.textContent = `Sisa Kesempatan: ${sisaKesempatan}`;
    }

    inputElement.value = '';
    inputElement.focus();
}

function akhiriGame() {
    document.getElementById('inputTebak').disabled = true;
    document.getElementById('btnTebak').disabled = true;
    document.getElementById('infoSisa').style.display = 'none';
    document.getElementById('btnReset').style.display = 'block';
}

function mulaiBaru() {
    angkaRahasia = Math.floor(Math.random() * 100) + 1;
    sisaKesempatan = 10;

    const inputElement = document.getElementById('inputTebak');
    inputElement.disabled = false;
    inputElement.value = '';
    
    document.getElementById('btnTebak').disabled = false;
    document.getElementById('pesan').textContent = '';
    
    const infoSisaElement = document.getElementById('infoSisa');
    infoSisaElement.style.display = 'block';
    infoSisaElement.textContent = `Sisa Kesempatan: ${sisaKesempatan}`;
    
    document.getElementById('btnReset').style.display = 'none';
    inputElement.focus();
}

// Fitur tambahan: Bisa tekan tombol 'Enter' untuk menebak
document.getElementById('inputTebak').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        cekTebakan();
    }
});