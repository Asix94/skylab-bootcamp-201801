/*Write a JavaScript program that accept two integers and display the larger.*/

function largerInteger(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log('1) ' + largerInteger(1,2));

/*Write a JavaScript conditional statement to find the sign of product of three numbers. 
Display an alert box with the specified sign.*/

function signProduct(a,b,c){
    var num = a * b * c;
    if(num >= 0){
        return 'the sign is +';
    }
    else{
        return 'the sign is -';
    }
}

console.log('2) ' + signProduct(3,-7,2));

/*Write a JavaScript conditional statement to sort three numbers. 
Display an alert box to show the result.*/

function sortNumbers(a,b,c){
    if(a > b && a > c && b > c){
        return a + ' ' + b + ' ' + c;
    }
    else if(b > a && b > c && a > c){
        return b + ' ' + a + ' ' + c;
    }
    else if(b > a && c > a && b > c){
        return b + ' ' + c + ' ' + a;
    }
    else if(c > a && c > b && a > b){
        return c + ' ' + a + ' ' + b;
    }
    else if(c > a && c > b && b > a){
        return c + ' ' + b + ' ' + a;
    }
    else if(a > b && a > c && c > b){
        return a + ' ' + c + ' ' + b;
    }
}

console.log('3) ' + sortNumbers(0,-1,4));

/*Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result.*/

function largestNumber(a,b,c,d,e){
    if(a > b && a > b && a > c && a > d && a > e){
        return a;
    }
    else if(b > a && b > c && b > d && b > e){
        return b;
    }
    else if(c > a && c > b && c > d && c > e){
        return c;
    }
    else if(d > a && d > b && d > c && d > e){
        return d;
    }
    else if(e > a && e > b && e > c && e > d){
        return e;
    }
}

console.log('4) ' + largestNumber(-5,-2,-6,0,-1));

/*Write a JavaScript for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, and display a message to the screen.*/

function oddOrEvent(){
    var chain = '';
    for(var i=0;i<15;i++){
        if(i%2==0){
            chain += i + ' is even\n';
        }
        else{
            chain += i + ' is odd\n';
        }
    }

    return chain;
}

console.log('5) ' + oddOrEvent());

/*Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz".*/

function FizzBuzz(){
    var chain = '';
    for(i=0;i<100;i++){
        if(i%3==0 && i%5==0){
            chain += i + ' FizzBuz\n';
        }
        else if(i%3==0){
            chain += i + ' Fizz\n'; 
        }
        else if(i%5==0){
            chain += i + ' Buzz\n';
        }
    }

    return chain;
}

console.log('6) ' + FizzBuzz());

/*Write a JavaScript program to construct the following pattern, using a nested for loop. 
Go to the editor*/

function contructPattern(){
    var chain = '';
    for(i=0;i<5;i++){
        console.log(chain += '*');
    }
}

console.log('7) '); contructPattern();

/*Write a JavaScript program to sum the multiples of 3 and 5 under 1000.*/

function under100(){
    var num = 0;
    for(i=0;i<1000;i++){
        if(i%3==0 && i%5==0){
            num = num + i;
        }
    }

    return num;
}

console.log('8) ' + under100());