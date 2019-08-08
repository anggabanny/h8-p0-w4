function cariModus(arr) {
    var checkArray = 0;
    var count = 0;
    var angka = 0;
    for(var i = 0; i < arr.length; i++){
        var sementaraCount = 0;
        var sementaraAngka = 0;
        for(var j = 0; j < arr.length; j++){
            
            if (arr[j] == arr[i]) {
                sementaraCount++;
                sementaraAngka = arr[i]
            } else if (arr[j] != arr[i]){
                checkArray++;
            }
        }
        if (sementaraCount > count) {
            count = sementaraCount;
            angka = sementaraAngka;
        }
    }

    if (count == 1 || count == 0 || checkArray == 0) {
        return -1
    } else {
        return angka
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1