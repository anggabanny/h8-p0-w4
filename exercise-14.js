function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var bayar = 2000;

    var output = [];
    for(var i = 0; i < arrPenumpang.length; i++){
        var tampung = {
            penumpang : arrPenumpang[i][0],
        };
        for(var j = 0; j < rute.length; j++){
            if (rute[j] == arrPenumpang[i][1]){
                tampung.naikDari = rute[j]
                for(var k = j; k < rute.length; k++){
                    if (rute[k] == arrPenumpang[i][2]) {
                        tampung.tujuan = rute[k]
                        tampung.bayar = (k - j) * bayar;
                    }
                }
            }
        }
        output.push(tampung)
    }
    return output
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
