/*map*/

/*Write a high order function that take the array of months and create a new array that contains the same months 
but with the first letter in upper case.*/

function map(arr,func){
    chain = [];
    for(i=0;i<arr.length;i++){
        func(arr[i]);
    }

    return chain; 
}

function firstletterUpper(month){
    newmonth = month.substr(0,1).toUpperCase() + month.substr(1);
    chain.push(newmonth);
}

console.log('1) map');
console.log(map(['january','february','march','april','may','june','july','august', 'september','october','november','december'],firstletterUpper));

/*filter*/

/*Write a high order function that take the array of months and create a new array that contains only the months that
 begin with j.*/

function filter(arr,func){
    chain = [];
    for(i=0;i<arr.length;i++){
        func(arr[i]);
    }

    return chain; 
}

function onlyOneLetter(month){
    if(month.substr(0,1).toLowerCase() === 'j'){
        chain.push(month);
    }
}

console.log('2) filter');
console.log(filter(['january','february','march','april','may','june','july','august', 'september','october','november','december'],onlyOneLetter));

/*reduce*/

/*Write a high order function that counts all the vowels of the following text.*/

function countvowels(text){
    var character = text.toLowerCase().split('')
    var vowels = 'aeiou';
    
    var countvowels = character.reduce(function(acc,current){
        return vowels.indexOf(current) > -1 ? acc + 1 : acc;
    },0);
    
    return countvowels;
}

console.log('3) reduce');
console.log(countvowels('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'));

/*every & some*/

/*Write a high order function that returns true if all months have five letters or more, and if some month has five 
letters or more.*/

function moreFiveLetter(words) {
    return words.some(function (word) {
        console.log(word);

        return word.length >= 5;
    });
 }

console.log('4) every & some');
console.log(moreFiveLetter(['january','february','march','april','may','june','july','august', 'september','october','november','december']));

/*Callback*/

/*Write a callback function that receives an age and a callback function, if age is equal or great than 18, call the 
callback function to allow enter in a bar, if hasn't 18 the entrance is not allowed.*/

function accessBar(age,callback){
    if(age >= 18){
        callback(true);
    }
    else{
        callback(false);
    }
}

function callback(allowed){
    console.log(allowed ? 'the entrance is allowed' : 'the entrance is not allowed');
}

console.log('5) Callback');
console.log(callback(23,callback));