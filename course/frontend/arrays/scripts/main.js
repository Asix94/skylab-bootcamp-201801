/*Write a JavaScript function to check whether an input is an array or not.*/

function isArray(arr){
    chain = '';
    if(arr instanceof Array)
        chain = 'this should returns ' + true;
    else{
        chain = 'this should returns ' + false;
    }

    return chain;
}

console.log('1) isArray');
console.log(isArray('Skylab'));
console.log(isArray([3, 5]));

/*Write a simple JavaScript program to join all elements of the following array into a string.*/

function joinElement(arr){
    return arr.join();
}

console.log('2) joinElements');
console.log(joinElement(['John','George','Ringo','Paul']));

/*Write a JavaScript function to clone an array.*/

function arrayClone(arr){
    
    return arr.slice();
}

console.log('3) array_Clone');
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

/*Write a JavaScript function to find the difference of two arrays.*/

function findDifferences(arr1,arr2){
    var arr = [];
    var count = 0;
    var newarr1 = arr1.join();
    var newarr2 = arr2.join();
    newarr1 = newarr1.split(',');
    newarr2 = newarr2.split(',');
    var newarr = newarr1.concat(newarr2);
    for(i=0;i<newarr.length;i++){
        count = 0;
        for(j=0;j<newarr.length;j++){
            if(newarr[i] !== newarr[j]){
                count++;
            }
            if(count === newarr.length-1){
                arr.push(newarr[i]);
                count = 0;
            }
        }
    }

    return arr;
}

console.log('4) findDifferences');
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));
console.log(findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));

/*Write a JavaScript program to compute the sum and product of an array of integers.*/

function sumAndProduct(arr){
    var sum = 0;
    var pro = 1;
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i];
        pro = pro * arr[i];
    }

    return 'sum result = ' + sum + ' pro result = ' + pro;
}

console.log('5) Sum and Product');
console.log(sumAndProduct([1, 2, 3]));

/*Write a JavaScript program to add items in an blank array and display the items.*/

function addItems(){
    var arr = [];
    for(i=0;i<arguments.length;i++){
        arr.push(arguments[i]);
    }

    return arr;
}

console.log('6) addItems');
console.log(addItems("1","2","3",1, 2, 3));

/*Write a JavaScript function to generate an array of specified length, filled with integer numbers, 
increase by one from starting position.*/

function generateArrayLength(num1,num2){
    arr = [];
    for(i=0;i<num2;i++){
        arr.push(num1);
        num1++;
    }

    return arr;
}

console.log('7) generateArrayLength');
console.log(generateArrayLength(1, 4));
console.log(generateArrayLength(-6, 4));

/*Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.*/

function last(arr,num){
    var newarr = [];
    
    if(num == undefined){
        num = 1;
    }
    else if(num > arr.length){
        num = arr.length;
    }

    for(i=arr.length-num;i<arr.length;i++){
        newarr.push(arr[i]);
    }
    
    return newarr;
}

console.log('8) last');
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

/*Write a JavaScript program to sort the items of an array.*/

function sortItems(arr){

    return arr.sort();
}

console.log('9) sortItems');
console.log(sortItems([3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

/*Write a JavaScript function to get a random item from an array.*/

function getRandom(arr){
    for(i=arr.length-1;i>0;i--){
        var j, x, i;
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }

    return arr;
}

console.log('10) getRandom');
console.log(getRandom([1, 2, 3]));

/*Write a JavaScript program to find duplicate values in a JavaScript array.*/

function findDuplicates(arr1,arr2){
    newarr = [];
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                newarr.push(arr1[i]);
            }
        }
    }

    return newarr;
}

console.log('11) findDuplicates');
console.log(findDuplicates([1, 2, 3], [100, 2, 1, 10]));

/*Write a JavaScript function to merge two arrays and removes all duplicates elements.*/

function mergeArrays(arr1,arr2){

    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                arr1.splice(i, 1);
                i--;
            }
        }
    }
    newarr = arr1.concat(arr2);
    return  newarr;
}

console.log('12) mergeArrays');
console.log(mergeArrays([1, 2, 3],[2, 30, 1]));

/*Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8.*/

function separateEven(num){
    var chain = '';
    var char = num.toString();
    for(i=0;i<char.length;i++){
        if(parseInt(char[i])%2==0 && parseInt(char[i+1])%2==0){
            chain += char[i] + '-';
        }
        else{
            chain += char[i];
        }
    }
    return chain;
}

console.log('13) separateEven');
console.log(separateEven('025468'));

/*Write a JavaScript program to find the most frequent item of an array.*/

function mostFrequentItems(arr){
    count1 = 0;
    count2 = 0;
    post = 0;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i] === arr[j]){
                count1++;
            }
        }
        if(count1 > count2){
            count2 = count1;
            post = i;
        }
        count1 = 0;
    }

    return arr[post] + ' ( ' + count2 + ' times ) ';
}

console.log('14) mostFrequentItem');
console.log(mostFrequentItems([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

/*Write a JavaScript function to move an array element from one position to another.*/

function moveElement(arr,num1,num2){
    if(num1 >= 0 && num2 >=0){
        x = arr[num1];
        arr[num1] = arr[num2];
        arr[num2] = x;
    }

    return arr;
}

console.log('15) moveElement');
console.log(moveElement([10, 20, 30, 40, 50], 0, 2));
console.log(moveElement([10, 20, 30, 40, 50], -1, -2));

/*Write a JavaScript program which accept a string as input and swap the case of each character. 
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

function swapCase(word){
    chain = '';
    for(i=0;i<word.length;i++){
        if(word[i] === word[i].toUpperCase()){
            chain += word[i].toLowerCase();
        }
        else{
            chain += word[i].toUpperCase();
        }
    }

    return chain;
}

console.log('16) swapCase');
console.log(swapCase('The Quick Brown Fox'));

/*Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.*/

function PrintElementsArray(){

}

console.log('17) Print elements array');
console.log(PrintElementsArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

/*Write a JavaScript function to create a specified number of elements with pre-filled string value array.*/

function arrayFilled(){

}

console.log('18) ' + arrayFilled());

/*Write a JavaScript program to find the sum of squares of a numeric vector.*/

function sumSquares(){

}

console.log('19) ' + sumSquares());

/*Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).*/

function removeDuplicate(){

}

console.log('20) ' + removeDuplicate());

/*We have the following arrays : 
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
o = ["th","st","nd","rd"] 
Write a JavaScript program to display the colors in the following way : 
"1st choice is Blue ." 
"2nd choice is Green." 
"3rd choice is Red."*/

function showChoices(){

}

console.log('21) ' + showChoices());

/*Find the leap years in a given range of years.*/

function showLeapYear(){

}

console.log('22) ' + showLeapYear());

/*Write a JavaScript program to shuffle an array.*/

function shuffleArray(){

}

console.log('23) ' + shuffleArray());

/*Write a JavaScript program to perform a binary search.*/

function binarySearch(){

}

console.log('24) ' + binarySearch());

/*There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index 
value from the given arrays.*/

function sumPosition(){

}

console.log('25) ' + sumPosition());

/*Write a JavaScript function to generate an array between two integers of 1 step length.*/

function generateArrayStep(){

}

console.log('26) ' + generateArrayStep());

/*Write a JavaScript program to flatten a nested (any depth) array. 
If you pass shallow, the array will only be flattened a single level.*/

function flattenArray(){

}

console.log('27) ' + flattenArray());

/*Write a JavaScript program to compute the union of two arrays. Sample Data :*/

function unionArray(){

}

console.log('28) ' + unionArray());

/*Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.*/

function removeFlasy(){

}

console.log('29) ' + removeFlasy());

/*Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/

function first(){

}

console.log('30) ' + first());

/*Write a JavaScript function to sort the following array of objects by title value.*/

function sortObjectsTitle(){

}

console.log('31) ' + sortObjectsTitle());

/*Write a JavaScript program to find a pair of elements (indices of the two numbers) 
from an given array whose sum equals a specific target number.*/

function findPairSum(){

}

console.log('32) ' + findPairSum());

/*Write a JavaScript function to retrieve the value of a given property from all elements in an array.*/

function validValues(){

}

console.log('33) ' + validValues());

/*Write a JavaScript function to find the longest common starting substring in a set of strings.*/

function longestCommon(){

}

console.log('34) ' + longestCommon());

/*Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
Test Data : 
console.log(num_string_range('a', "z", 2)); ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]*/

function fillArray(){

}

console.log('35) ' + fillArray());

/*Write a JavaScript function to remove a specific element from an array.*/

function removeElement(){

}

console.log('36) ' + removeElement());

/*Write a JavaScript function to find an array contains a specific element.*/

function findArrayWithElement(){

}

console.log('37) ' + findArrayWithElement());

/*Write a JavaScript script to empty an array keeping the original size.*/

function emptyArray(){

}

console.log('38) ' + emptyArray());

/*Write a JavaScript function to get nth largest element from an unsorted array.*/

function getNthLargest(){

}

console.log('39) ' + getNthLargest());

/*Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.*/

function _arrayFilled(){

}

console.log('40) ' + _arrayFilled());

/*Write a JavaScript function to filter false, null, 0 and blank values from an array.*/

function filterFalsy(){

}

console.log('41) ' + filterFalsy());
