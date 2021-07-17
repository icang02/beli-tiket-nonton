const btn = document.getElementById('btn');
btn.addEventListener('click', function() {

    const nota = document.querySelector('.nota');
    nota.style.display = 'block';

    const nama = document.getElementById('nama').value;
    // const movie = document.getElementById('movie').value;
    const movie1 = document.getElementById('movie1').checked;
    const movie2 = document.getElementById('movie2').checked;
    const movie3 = document.getElementById('movie3').checked;
    const hari = document.getElementById('hari').value;
    const jumlah = document.getElementById('jumlah').value;
    
    const daftarHari = ['', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    let pilihMovie, pilihHari, harga;

    console.log("movie conjuring : " + movie1);
    console.log("fast furious : " + movie2);
    console.log("godzilla : " + movie3);

    if (movie1) {
        pilihMovie = "The Conjuring 3";
        pilihHari = daftarHari[hari];
        if (hari >= 1 && hari <= 4 ) {
            harga = 35000;
        } else if (hari == 5) {
            harga = 40000;
        } else if (hari >= 6 && hari <= 7) {
            harga = 45000;
        }
    } else if (movie2) {
        pilihMovie = "Fast and Furious 9";
        pilihHari = daftarHari[hari];
        if (hari >= 1 && hari <= 4 ) {
            harga = 45000;
        } else if (hari == 5) {
            harga = 50000;
        } else if (hari >= 6 && hari <= 7) {
            harga = 55000;
        }
    } else if (movie3) {
        pilihMovie = "Godzilla vs. Kong";
        pilihHari = daftarHari[hari];
        if (hari >= 1 && hari <= 4 ) {
            harga = 40000;
        } else if (hari == 5) {
            harga = 45000;
        } else if (hari >= 6 && hari <= 7) {
            harga = 50000;
        }
    }

    document.getElementById('tNama').setAttribute('value', nama.toUpperCase());
    document.getElementById('tMovie').setAttribute('value', pilihMovie);
    document.getElementById('tHari').setAttribute('value', pilihHari);
    document.getElementById('tJumlah').setAttribute('value', jumlah);
    document.getElementById('tTotal').setAttribute('value', 'Rp.' + harga * jumlah);
    document.getElementById('tTanggal').setAttribute('value', new Date().toString().split('G')[0]);
    document.getElementById('tInfo').innerHTML = 'Silahkan selesaikan pembayaran Anda';
    
});
