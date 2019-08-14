// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [{
    name: 'ginta',
    position: 'BF',
    ability: 'fat',
    score: 20
},
{
    name: 'hiruma',
    position: 'DB',
    ability: 'manipulation',
    score: 100
},
{
    name: 'eyeshield',
    position: 'RB',
    ability: 'topSpeed',
    score: 80
}
]

function release11(exercise1){
var tampung = [];
for(var i = 0; i < exercise1.length; i++){
    if (exercise1[i].score > 30) {
        tampung.push(exercise1[i])
    }
}
return tampung
}
console.log(release11(exercise1));

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
[ 
{ name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
{ name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]
*/

function release22(exercise1){
console.log(exercise1);
for(var  i in exercise1){
    if (exercise1[i].score > exercise1[1].score) {
        temp = exercise1[i]
        exercise1[i] = exercise1[i+1]
        exercise1[i+1] = temp
    }
    
}
console.log(exercise1);
}
console.log(release22(exercise1));
// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
[ 
{ name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]
*/

// 2. mensorting array of object berdasarkan value dari objectnya

function release21(exercise1){
console.log(exercise1);

var count = 2;
var tampung = [];
for(var i = 0; i < exercise1.length; i++){
    console.log(exercise1[count].score);
    
    // if (exercise1[i].score > exercise1[i+1].score) {
    //     var temp = exercise1[i]
    //     exercise1[i] = exercise1[i+1]
    //     exercise1[i+1] = temp
    // }
}
console.log(tampung);

}
console.log(release21(exercise1));
// Release 1 => sorting isi ascending berdasarkan score
/* 
[ 
{ name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
{ name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
{ name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
]
*/
// Release 2 => sorting isi descending
/* 
[ 
{ name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
{ name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
{ name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
]
*/