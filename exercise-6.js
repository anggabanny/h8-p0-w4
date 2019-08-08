function digitPerkalianMinimum(angka) {
    var yesDapat = [];
    for(var i = 1; i <= angka; i ++){
        for(var j = 1; j <= angka; j++){
            if ( i * j == angka) {
                var tempel = i.toString() + j.toString();
                yesDapat.push(tempel);
            }
        }
    }

    var digitPembanding = yesDapat[0].length;
    for(var k = 0; k < yesDapat.length; k++){
        if (yesDapat[k].length < digitPembanding) {
            digitPembanding = yesDapat[k].length;
        }
    }
    return digitPembanding
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2