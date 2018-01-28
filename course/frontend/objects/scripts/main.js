/*is_object*/

/*Write a JavaScript function to check whether an input is an object or not.*/

function isObject(obj){
    if(obj instanceof Object){
        return 'This is an Object';
    }
    else{
        return 'This is not an Object';
    }
}

console.log('1) is_object');
console.log(isObject({name: 'reanault'}));

/*Create object car*/

/* Write an object that represents a car with three properties: `brand`, `model`, `color`. 
Add a method that shows the following message: 
'My black Sean León is great!' (Hint: use `this`)*/

/* Use literal notation, and object constructor notation. */

function Car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.message = 'My ' + this.color + ' ' + this.brand + ' ' + this.model + ' is great!';
}

var Sean = new Car('Sean','León','black');

console.log('2) Create object car');
console.log(Sean.message);

