function changeMe(arr) {
    var output = {}
    for(var i = 0; i < arr.length; i++){
        output.firsName = arr[i][0];
        output.lastName = arr[i][1];
        output.gender = arr[i][2];

        if (arr[i][3] == undefined) {
            output.age = 'Invalid Birth Year';
        } else {
            output.age = 2019 - arr[i][3];
        }
        var tagName = (i+1)+'. '+output.firsName+ ' ' +output.lastName;
        console.log(tagName);
        console.log(output);
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