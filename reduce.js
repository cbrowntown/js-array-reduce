/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    const newArray = [arr[0][key]];
    arr.reduce(function (accum, nextObj) {
        newArray.push(nextObj[key]);
        return accum;
    });
    return newArray;
}



/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const newArray = Array.from(str.toLowerCase());
    const newObj = {};
    const vowels = 'aeiou';

    if (vowels.includes(newArray[0])) {
        newObj[newArray[0]] = 1;
    }
    newArray.reduce(function (accum, nextVal) {
        if (vowels.indexOf(nextVal) !== -1) {
            if (newObj[nextVal]) {
                newObj[nextVal]++;
            } else {
                newObj[nextVal] = 1;
            }
        }
        return accum;
    });
    return newObj;
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    arr[0][key] = value;
    arr.reduce(function (accum, nextObj) {
        nextObj[key] = value;
        return accum;
    });
    return arr;
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    const arrayTrue = [];
    const arrayFalse = [];
    const finalArray = [];
    if (callback(arr[0]) === true) {
        arrayTrue.push(arr[0]);
    } else {
        arrayFalse.push(arr[0]);
    }
    arr.reduce(function (accum, nextVal) {
        if (callback(nextVal) === true) {
            arrayTrue.push(nextVal);
        } else {
            arrayFalse.push(nextVal);
        }
        return accum;
    });
    finalArray.push(arrayTrue,arrayFalse);
    return finalArray;
}
