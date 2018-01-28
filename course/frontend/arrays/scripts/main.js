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

function PrintElementsArray(arr){
    for(i=0;i<arr.length;i++){
        console.log('row ' + i);
        if(arr[i] instanceof Array){
            for(j=0;j<arr[i].length;j++){
                console.log(arr[i][j]);
            }
        }
        else{
            console.log(arr[i]);
        }
    }

}

console.log('17) Print elements array');
console.log(PrintElementsArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

/*Write a JavaScript function to create a specified number of elements with pre-filled string value array.*/

function arrayFilled(num,string){
    var arr = [];
    for(i=0;i<num;i++){
        arr.push(string);
    }

    return arr;
}

console.log('18) array_filled (string)');
console.log(arrayFilled(3, 'default value'));
console.log(arrayFilled(4, 'password'));

/*Write a JavaScript program to find the sum of squares of a numeric vector.*/

function sumSquares(arr){
    var sum = 0;
    for(var i=arr.length-1;i>0;i--){
        sum += Math.pow(arr[i],2);
    }

    return sum;
}

console.log('19) Sum squares');
console.log(sumSquares([0,1,2,3,4]));

/*Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).*/

function removeDuplicate(arr){
    var count = 0;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i] == arr[j]){
                count++;            
            }
        }
        if(count > 1){
            arr.splice(i,1);
            count = 0;
        }
    }

    return arr;
}

console.log('20) removeDuplicate');
console.log(removeDuplicate([1,2,3,2,3]));

/*We have the following arrays : 
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
o = ["th","st","nd","rd"] 
Write a JavaScript program to display the colors in the following way : 
"1st choice is Blue ." 
"2nd choice is Green." 
"3rd choice is Red."*/

function showChoices(color,num){
    var chain = '';
    for(i=0;i<color.length;i++){
        switch(i+1){
            case 1:
                chain += (i+1)+num[0] + ' choise is ' + color[i] + '\n';
                break;
            case 2:
                chain += (i+1)+num[1] + ' choise is ' + color[i] + '\n';
                break;  
            case 3:
                chain += (i+1)+num[2] + ' choise is ' + color[i] + '\n';
                break;
            default:
                chain += (i+1)+num[3] + ' choise is ' + color[i] + '\n';
                break;
        }   
    }

    return chain;
}

console.log('21) showChoices');
console.log(showChoices(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],["st","nd","rd","th"]));

/*Find the leap years in a given range of years.*/

function showLeapYear(){
    chain = '';
    for(i=2000;i<2018;i++){
        if(i%400==0 || i%4==0){
            chain += i + ' this year is leap\n'
        }
    }

    return chain;
}

console.log('22) showLeapYears');
console.log(showLeapYear());

/*Write a JavaScript program to shuffle an array.*/

function shuffleArray(arr){
    for(i=arr.length-1;i>0;i--){
        var j, x, i;
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }

    return arr;
}

console.log('23) shuffleArray');
console.log(shuffleArray([1,2,3]));

/*Write a JavaScript program to perform a binary search.*/

function binarySearch(items,find){
    var firstIndex = 0;
    var lastIndex = items.length -1;
    var middleIndex = Math.floor((lastIndex + firstIndex)/2); // 3

    while(items[middleIndex] != find && firstIndex < lastIndex){
        if(find < items[middleIndex]){
            lastIndex = middleIndex -1;
        }
        else if(find > items[middleIndex]){
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
    
    return (items[middleIndex != find]) ? -1 : middleIndex;
}

console.log('24) binarySearch')
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5));

/*There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index 
value from the given arrays.*/

function sumPosition(arr1,arr2){
    var valor
    var newarr = [];

    (arr1 < arr2)? valor = arr2.length : valor = arr1.length;

    for(i=0;i<valor;i++){
        if(arr1[i] === undefined){
            newarr.push(0 + arr2[i]);
        }
        else if(arr2[i] === undefined){
            newarr.push(arr1[i] + 0);
        }
        else{
            newarr.push(arr1[i] + arr2[i]);
        }
    }

    return newarr;
}

console.log('25) sumPositions')
console.log(sumPosition([1,0,2,3,4],[3,5,6,7,8,13]));

/*Write a JavaScript function to generate an array between two integers of 1 step length.*/

function generateArrayStep(start,end){
    var arr = [];

    for(i=start;i<=end;i++){
        arr.push(i);
    }

    return arr;
}

console.log('26) generateArraySteps');
console.log(generateArrayStep(4, 7));
console.log(generateArrayStep(-4, 7));

/*Write a JavaScript program to flatten a nested (any depth) array. 
If you pass shallow, the array will only be flattened a single level.*/

function flattenArray(arr,shallow){
    var newarr = [];

    for(i=0;i<arr.length;i++){
        if(arr[i] instanceof Array){
            for(j=0;j<arr[i].length;j++){
                if(arr[i][j] instanceof Array){
                    for(k=0;k<arr[i][j].length;k++){
                        if(arr[i][j][k] instanceof Array){
                            for(l=0;l<arr[i][j][k].length;l++){
                                newarr.push(arr[i][j][k][l]);
                            }
                        }
                        else{
                            newarr.push(arr[i][j][k]);
                        }
                    }
                }   
                else{ 
                    newarr.push(arr[i][j]);
                }
            }
        }
        else{
            newarr.push(arr[i]);
        }
    }

    return newarr;
}   

console.log('27) flattenArray');
console.log(flattenArray([1, [2], [3, [[4]]],[5,6]]));
console.log(flattenArray([1, [2], [3, [[4]]],[5,6]]));

/*Write a JavaScript program to compute the union of two arrays. Sample Data :*/

function unionArray(arr1,arr2){
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                arr1.splice(i, 1);
                i--;
            }
        }
    }
    newarr = arr1.concat(arr2);
    newarr.sort();
    return  newarr;

}

console.log('28) unionArray');
console.log(unionArray([1, 2, 3], [100, 2, 1, 10]));

/*Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.*/

function removeFlasy(arr){
    reg = /^-?[1-9]*$/gm
    for(i=0;i<arr.length;i++){
        if(reg.test(arr[i]) != true){
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}

console.log('29) removeFalsy');
console.log(removeFlasy([NaN, 0, 15, false, -22, '',undefined, 47, null]));

/*Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/

function first(arr,element){
    chain = [];

    if (element > arr.length){
        element = arr.length;
    }  

    if(element === undefined){
        chain.push(arr[0]);
    }
    else{
        for(i=0;i<element;i++){
            chain.push(arr[i]);
        }
    }

    return chain;
}

console.log('30) first');
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

/*Write a JavaScript function to sort the following array of objects by title value.*/

function sortObjectsTitle(object){
    object.sort(function(a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

    return object;
}

console.log('31) sortObjectsTitle');
console.log(sortObjectsTitle([ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]));

/*Write a JavaScript program to find a pair of elements (indices of the two numbers) 
from an given array whose sum equals a specific target number.*/

function findPairSum(arr,element){
    chain = '';
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i] + arr[j] === element){
                chain += 'Index ' + i + ' and Index ' + j + '\n';
            }
        }
    }
    return chain;
}

console.log('32) findPairSum');
console.log(findPairSum([10,20,10,40,50,60,70],50));

/*Write a JavaScript function to retrieve the value of a given property from all elements in an array.*/

function validValues(arr){
    reg = /^-?[1-9]*$/gm
    for(i=0;i<arr.length;i++){
        if(reg.test(arr[i]) != true){
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}

console.log('33) validValues');
console.log(validValues([NaN, 0, 15, false, -22, '',undefined, 47, null]));

/*Write a JavaScript function to find the longest common starting substring in a set of strings.*/

function longestCommon(arr1){
    var arr = arr1.concat().sort();
    var a1 = arr[0];
    var a2 = arr[arr.length-1];
    var L = a1.length;
    var i = 0;

    while(i < L && a1.charAt(i) === a2.charAt(i)) i++;
        return a1.substring(0, i);
}

console.log('34) longestCommon');
console.log(longestCommon(['goo', 'google']));

/*Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
Test Data : 
console.log(num_string_range('a', "z", 2)); ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]*/

function fillArray(letter1,letter2,count){
    var arr = [];
    var letter = '';
    var a = letter1.charCodeAt(0);
    var z = letter2.charCodeAt(0);
    for(i=a;i<z;i=i+count){
        arr.push(String.fromCharCode(i));
    }

    return arr;
}

console.log('35) fillArray');
console.log(fillArray('a', "z", 2));

/*Write a JavaScript function to remove a specific element from an array.*/

function removeElement(arr,element){
    for(i=0;i<arr.length;i++){
        if(arr[i] === element){
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}

console.log('36) removeElement');
console.log(removeElement([2, 5, 9, 6], 5));

/*Write a JavaScript function to find an array contains a specific element.*/

function findArrayWithElement(arr,element){
    var chain = '';
    for(i=0;i<arr.length;i++){
        if(arr[i] === element){
            chain += 'Index ' + i + ' Element ' + arr[i] + '\n';
        }
    }

    return chain;
}

console.log('37) findArrayWithElement');
console.log(findArrayWithElement([2, 5, 9, 6], 5));

/*Write a JavaScript script to empty an array keeping the original size.*/

function emptyArray(arr){
    arr.fill(null);
    return arr.length;
}

console.log('38) emptyArray')
console.log(emptyArray([1,2,3]));

/*Write a JavaScript function to get nth largest element from an unsorted array.*/

function getNthLargest(arr,element){
    arr.sort(function(a,b){
        return a - b;
    })

    return arr[element];

}

console.log('39) getNthLargest');
console.log(getNthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

/*Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.*/

function _arrayFilled(repeat,item){
    var arr = [];
    for(i=0;i<repeat;i++){
        arr.push(item);
    }

    return arr;
}

console.log('40) array_filled (numeric)');
console.log(_arrayFilled(6, 0));
console.log(_arrayFilled(4, 11));

/*Write a JavaScript function to filter false, null, 0 and blank values from an array.*/

function filterFalsy(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === ''){
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}

console.log('41) filterFalsy');
console.log(filterFalsy([58, '', 'abcd', true, null, false, 0]));
