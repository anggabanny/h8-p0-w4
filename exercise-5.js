function ubahHuruf(kata) {
    console.log(kata);
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var temp = '';
    for(var i = 0; i < kata.length; i++){
        for(var j = 0; j < alphabet.length; j++){
            if (kata[i] == alphabet[j]) {
                temp+=alphabet[j+1]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu