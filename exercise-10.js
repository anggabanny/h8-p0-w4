function changeMe(arr) {
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);

// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""