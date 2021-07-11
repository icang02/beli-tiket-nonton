const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const nota = document.querySelector('.nota');
    nota.style.display = 'block';

    const nama = document.getElementById('nama').value;
    const movie = document.getElementById('movie').value;
    const jumlah = document.getElementById('jumlah').value;
    let harga = 0;
    let totalBayar = 0;
    
    const pemesan = document.getElementById('pemesan');
    const film = document.getElementById('film');
    const jumlahPesanan = document.getElementById('jumlahPesanan');
    const total = document.getElementById('total');
    const p = document.getElementById('p');
    let namaFilm = '';

    if (movie == 1) {
        harga = 55000;
        namaFilm = 'The Conjuring 3';
    } else if (movie == 2) {
        harga = 50000;
        namaFilm = 'Fast and Furious 9';
    } else if (movie == 3) {
        harga = 35000;
        namaFilm = 'The Tomorrow War';
    } else if (movie == 4) {
        harga = 40000;
        namaFilm = 'Oxygen';
    } else if (movie == 5) {
        harga = 40000;
        namaFilm = 'Godzilla vs. Kong';
    }

    totalBayar = harga * jumlah;

    pemesan.setAttribute('value', nama);
    film.setAttribute('value', namaFilm);
    jumlahPesanan.setAttribute('value', jumlah);
    total.setAttribute('value', 'Rp.' + totalBayar);
    p.innerHTML = 'Silahkan selesaikan pembayaran Anda';
    
});