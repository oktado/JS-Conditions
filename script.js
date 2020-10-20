// Excercise 1
let pekerjaan = 'admin';

if (pekerjaan == 'HR') {
    console.log('mencari pegawai baru.');
}else if (pekerjaan == 'admin') {
    console.log('mencatat laporan keuangan');
}else if (pekerjaan == 'designer') {
    console.log ('merancang sebuah produk');
}else if (pekerjaan == 'programmer') {
    console.log('membuat sebuah program');
}else {
    console.log('pekerjaan belum ada !');
}

// Excercise 2
let nilaiPertama = 5
let nilaiKedua = 4
if(nilaiPertama < nilaiKedua){
    console.log('nilai '+nilaiPertama+' lebih KECIL dari nilai '+nilaiKedua);
}else if(nilaiPertama > nilaiKedua) {
    console.log('nilai '+nilaiPertama+' lebih BESAR dari nilai '+nilaiKedua);

}else{
    console.log('nilai '+nilaiPertama+' SAMA dengan nilai '+nilaiKedua);
}

// Excercise 3
var angka = 6
switch(angka){
    case 1: {console.log('Minggu'); break;}
    case 2: {console.log('Senin'); break;}
    case 3: {console.log('Selasa'); break;}
    case 4: {console.log('Rabu'); break;}
    case 5: {console.log('Kamis'); break;}
    case 6: {console.log('jumat'); break;}
    case 7: {console.log('Sabtu'); break;}
}

// Excercise 4
var move = 'RIGHT'
switch(move){
    case 'UP': {console.log('Karakter berjalan ke atas.'); break;}
    case 'RIGHT': {console.log('Karakter berjalan ke kanan.'); break;}
    case 'BOTTOM': {console.log('Karakter berjalan ke bawah.'); break;}
    case 'LEFT': {console.log('Karakter berjalan ke kiri.'); break;}
}