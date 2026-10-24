//Varibael ada 3. let, var, const
let nama = "Dicky Falah Abdillah";{
    let nama = "Kynjiro";//disini hasilnya akan kynjiro
    console.log(nama);
}
console.log(nama);// disini hasilnya akan dicky falah abdillah

var namaC = "Tanjiro";{
    var namaC = "Kamado";//Disini haislnya akan kamado 
    console.log(namaC);
}
console.log(namaC);//Disini hasilnya akan kamado juga karena sifat var akan merubah nilai var yang lama

const ANGKA = 4; //Menggunakan kapital agar tau fungsinya sebagai nilai tetap dan gaboleh diganti
console.log(ANGKA);

//Perbedaan dari let dan var adalah ada di penggunaan scopenya
//Jika ada let diawal dan kemudian memakai scope, isi letnya akan diganti maka ketika di console log hasilnya akan let yang terbaru. Tapi jika console log lagi diluar scope... Hasilnya akan ke let awal
