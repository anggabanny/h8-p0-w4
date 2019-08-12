// function latihan2(max){
//     for(var i = 1; i <= max; i++){
//         var temp = '';
//         for(var j = 1; j <= i; j++){
//             temp+=j
//         }
//         console.log(temp);
//     }

//     for(i = max ; i >0; i--){
//         temp = '';
//         for(j = 1; j <= i; j++){
//             temp+=j
//         }
//         console.log(temp);
//     }
// }
// latihan2(5);

// function latihan2(max){
//     // for(var i = 1; i <=max; i++){
//     //     var temp = '';
//     //     for(var j = 1; j <= i; j++){
//     //         temp+='*'
//     //     }
//     //     console.log(temp);
//     // }
//     // for(var i = max; i > 0; i--){
//     //     var temp = '';
//     //     for(var j = 1; j <= i; j++){
//     //         temp+='*'
//     //     }
//     //     console.log(temp);
//     // }
//     // var count = max;
//     // for(var i = max; i > 0; i--){
//     //     var temp = '';
//     //     for(var j = max; j > 0 ; j--){
//     //         if (j > count) {
//     //             temp+=' '
//     //         } else {
//     //             temp+="*"
//     //         }
//     //     }
//     //     count--;
//     //     console.log(temp);
//     // }
    
//     // for(i = 1; i <= max ; i++){
//     //     var temp = '';
//     //     for(j = 1; j <= max ; j++){
//     //         temp+='*'
//     //     }
//     //     console.log(temp);
//     // }
// }
// latihan2(5);

// function testaja(height){
//     for(var i = 1; i <=height; i++){
//         var temp = ''
//         for(var j = height; j >= i; j--){
//             temp+=' '
//         }
//         for(var k = 1; k <= i; k++){
//             temp+='*'
//         }
//         for(var l = 2; l <= i; l++){
//             temp+='*'
//         }
//         console.log(temp);
//     }
// }
// testaja(5);

function testaja(height){
    for(var i = 1; i <=height; i++){
        var temp = ''
        for(var j = height; j >= i; j--){
            temp+=' '
        }
        for(var k = 1; k <= i; k++){
            temp+='*'
        }
        for(var l = 1; l <= height; l++){
            temp+='*'
        }
        for(var m = height; m >= i; m--){
            temp+='*'
        }
        console.log(temp);
    }
}
testaja(5);