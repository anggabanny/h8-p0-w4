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

    function release12(exercise1){
        var output = []
        for(var  i in exercise1){
            if (exercise1[i].score >=70 && exercise1[i].score <=90) {
                output.push(exercise1[i])
            }
        }
    return output
    }

    console.log(release12(exercise1));
    // Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
    /* 
    [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
    ]
    */

// 2. mensorting array of object berdasarkan value dari objectnya

    function release21(exercise1){
        for(var i = 0; i < exercise1.length; i++){
            for(var j = 0 ; j < exercise1.length -1; j++){
                if(exercise1[j].score > exercise1[j+1].score){
                    var temp = exercise1[j]
                    exercise1[j] = exercise1[j+1]
                    exercise1[j+1] = temp
                }
            }
        }
        return exercise1
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

    function release21(exercise1){
        for(var i = 0; i < exercise1.length; i++){
            for(var j = 0 ; j < exercise1.length -1; j++){
                if(exercise1[j].score < exercise1[j+1].score){
                    var temp = exercise1[j]
                    exercise1[j] = exercise1[j+1]
                    exercise1[j+1] = temp
            }
        }
    }
    return exercise1
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