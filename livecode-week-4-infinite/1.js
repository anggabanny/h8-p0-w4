/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
  - A bernilai 4
  - B bernilai 3
  - C bernilai 2
  - D bernilai 1
  - E bernilai 0
  - Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
  - WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/


// Algorithm or pseudocode here
// 1.  Deklarasi 'A' dengan nilai 4
// 2.  Deklarasi 'B' dengan nilai 3
// 3.  Deklarasi 'C' dengan nilai 2
// 4.  Deklarasi 'D' dengan nilai 1
// 5.  Deklarasi 'E' dengan nilai 0
// 6.  Deklarasi 'totalNilai' dengan nilai 0
// 7.  lakukan looping menggunakan FOR, jika 'i' itu 0, apakah 'i' lebih kecil dari panjang 'NILAI', jika iya maka i di tambah 1
// 8.  cek apakah 'Nilai' ke 'i' sama dengan abjad 'A', jika iya masuk ke 9, jika tidak ke 10
// 9.  tambah 'totalNilai' dengan 'A' 
// 10.  cek apakah 'Nilai' ke 'i' sama dengan abjad 'B', jika iya masuk ke 11, jika tidak ke 12
// 11.  tambah 'totalNilai' dengan 'B' 
// 12.  cek apakah 'Nilai' ke 'i' sama dengan abjad 'C', jika iya masuk ke 13, jika tidak ke 14
// 13.  tambah 'totalNilai' dengan 'C' 
// 14.  cek apakah 'Nilai' ke 'i' sama dengan abjad 'D', jika iya masuk ke 15, jika tidak ke 16
// 15.  tambah 'totalNilai' dengan 'D' 
// 16.  cek apakah 'Nilai' ke 'i' sama dengan abjad 'E', jika iya masuk ke 17,
// 17.  tambah 'totalNilai' dengan 'E'
// 18. setelah perulangan 'Nilai' ke 'i' berakhir
// 19.  lakukan teknik perulangan yang sama seperti langkah ke 7, ganti 'i' jadi 'j'
// 20. cek apakah 'Nilai' ke 'j' sama dengan abjad 'E', jika iya masuk ke 21,
// 21.  tampilkan 'totalNilai' dan 'tidak lulus'
// 22. setelah perulangan 'Nilai' ke 'j' berakhir
// 23. tampilkan 'totalNilai' dan 'selamat lulus'

function kalkulatorNilai(nilai) {
  var A = 4;
  var B = 3;
  var C = 2;
  var D = 1;
  var E = 0;
  var totalNilai = 0;

  for(var i = 0; i < nilai.length; i++){
    if(nilai[i] == 'A'){
      totalNilai+=A
    } else if(nilai[i] == 'B'){
      totalNilai+=B
    } else if(nilai[i] == 'C'){
      totalNilai+=C
    } else if(nilai[i] == 'D'){
      totalNilai+=D
    } else if(nilai[i] == 'E'){
      totalNilai+=E
    }
  }

  for(var j = 0; j < nilai.length; j++){
    if (nilai[j] == 'E') {
      return 'Total Nilai: '+ totalNilai + '. Maaf kamu TIDAK LULUS.'
    }
  }
  return 'Total Nilai: '+ totalNilai + '. Selamat kamu LULUS!'
}

console.log(kalkulatorNilai("AABCADDA")); // Total Nilai: 23. Selamat kamu LULUS!
console.log(kalkulatorNilai("AAAAEA")); // Total Nilai: 20. Maaf kamu TIDAK LULUS.
console.log(kalkulatorNilai("ABCDD")); // Total Nilai: 11. Selamat kamu LULUS!