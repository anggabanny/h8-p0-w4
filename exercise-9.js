function checkAB(num) {
    var splitLogic = [];
    for(var j = 0; j < num.length; j++){
        splitLogic.push(num[j])
    }

    for(var i = 1; i < splitLogic.length; i++){
        if (splitLogic[i] == 'a') {
            if (splitLogic[i+4] == 'b') {
                return true
            }
        } else if (splitLogic[i] == 'b'){
            if (splitLogic[i+4] == 'a') {
                return true
            }
        }
    }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
