// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

function shoppingTime(memberId, money) {
    if (memberId == '' || memberId == undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    
    var temp = {}
    temp.memberId = memberId;
    temp.money = money;
    var moneyNew = money;
    var listPurchasedTemp = [];
    while(true){
        if (moneyNew >= 1500000) {
            listPurchasedTemp.push('Sepatu Stacattu')
            moneyNew -= 1500000
        } else if (moneyNew >= 500000) {
            listPurchasedTemp.push('Baju Zoro')
            moneyNew -= 500000
        } else if (moneyNew >= 250000) {
            listPurchasedTemp.push('Baju H&N')
            moneyNew -= 250000
        } else if (moneyNew >= 175000) {
            listPurchasedTemp.push('Sweater Uniklooh')
            moneyNew -= 175000
        } else if (moneyNew >= 50000) {
            listPurchasedTemp.push('Casing Handphone')
            moneyNew -= 50000
        } else {
            break;
        }
    }
    temp.listPurchased = listPurchasedTemp;
    temp.changeMoney = moneyNew;
    return temp
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
