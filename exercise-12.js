function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    
    if (shoppers.length < 1) {
        return shoppers
    }

    var pembeliSepatu = [];
    var pembeliBaju = [];
    var pembeliSweater = [];
    var profit = [0,0,0] //0 = sepatu, 1 = baju, 2 = sweater
    for(var i = 0; i < shoppers.length; i++){
        if (listBarang[0][0] == shoppers[i].product) {
            if (listBarang[0][2] >= shoppers[i].amount && shoppers[i].amount != 0) {
                pembeliSepatu.push(shoppers[i].name)
                listBarang[0][2] -= shoppers[i].amount 
                profit[0] +=  listBarang[0][1] * shoppers[i].amount
            }
        } if (listBarang[1][0] == shoppers[i].product) {
            if (listBarang[1][2] >= shoppers[i].amount && shoppers[i].amount != 0) {
                pembeliBaju.push(shoppers[i].name)
                listBarang[1][2] -= shoppers[i].amount 
                profit[1] +=  listBarang[1][1] * shoppers[i].amount
            }
        } if (listBarang[2][0] == shoppers[i].product) {
            if (listBarang[2][2] >= shoppers[i].amount && shoppers[i].amount != 0) {
                pembeliSweater.push(shoppers[i].name)
                listBarang[2][2] -= shoppers[i].amount 
                profit[2] +=  listBarang[2][1] * shoppers[i].amount
            }
        }
    }

    var output = [];
    for(var j = 0; j < listBarang.length; j++){
        var objectFresh = {
            product : listBarang[j][0],
        }

        if (objectFresh.product == listBarang[0][0]) {
            objectFresh.shoppers = pembeliSepatu;
            objectFresh.leftOver = listBarang[0][2]
            objectFresh.totalProfit = profit[0]
        } else if (objectFresh.product == listBarang[1][0]) {
            objectFresh.shoppers = pembeliBaju;
            objectFresh.leftOver = listBarang[1][2]
            objectFresh.totalProfit = profit[1]
        } else if (objectFresh.product == listBarang[2][0]) {
            objectFresh.shoppers = pembeliSweater;
            objectFresh.leftOver = listBarang[2][2]
            objectFresh.totalProfit = profit[2]
        }
        output.push(objectFresh)
    }
    return output
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
},
{
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
},
{
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}
]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]