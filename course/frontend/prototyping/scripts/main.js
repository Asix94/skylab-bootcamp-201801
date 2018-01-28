/*Person*/

/*a) Write a constructor function called Person and that has the following arguments:*/

function Person(firstName,lastName,age,gender,interest){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
}

/*b) Write the following three methods for Person.*/

Person.prototype.greeting = function(){

    return "Hi I'm " + this.firstName;
}

Person.prototype.farewell = function(){

    return this.firstName + " has left the building. Bye for now";
}

Person.prototype.bio = function(){
    var gender = '';
    var interest = '';

    (this.gender.toLowerCase() === 'm') ? gender = 'he' : gender = 'she';

    for(var i=0;i<this.interest.length;i++){
        if(i === this.interest.length-1){
            interest += ' and ' + this.interest[i];
        }
        else if(i === this.interest.length-2){
            interest += this.interest[i];
        }
        else{
            interest += this.interest[i] + ',';
        }
    }

    return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old ' 
    + gender + ' likes ' + interest;
}

var carlos = new Person('Carlos','Ramos',23,'m',['swimg','develop','tv','movies']);
console.log('1) Person');
console.log(carlos.greeting());
console.log(carlos.farewell());
console.log(carlos.bio());

/*Student*/

/*a) Write a constructor function called Student that inherit from Person and that has 
the following arguments:*/

function Student(firstName,lastName,age,gender,interest){
    Person.call(this,firstName,lastName,age,gender,interest);
}

/*b) The Student must inherit all methods from Person and overwrite greeting method to 
change its behavior to print:*/

Student.prototype = new Person();

Student.prototype.greeting = function(){
    return "Yo! I'm " + this.firstName;
}

var carlosst = new Student('Carlos','Ramos',23,'m',['swimg','develop','tv','movies']);
console.log('2) Student');
console.log(carlosst.greeting());
console.log(carlosst.farewell());
console.log(carlosst.bio());

/*Teacher*/

/*a) Write a constructor function called Teacher that inherit from Person and that has 
the following arguments:*/

function Teacher(firstName,lastName,age,gender,interest,subject){
    Person.call(this,firstName,lastName,age,gender,interest);
    this.subject = subject;
}

/*b) The Teacher must inherit all methods from Person and overwrite greeting method to 
change its behavior to print:*/

Teacher.prototype = new Person();

Teacher.prototype.greeting = function(){
    (this.gender.toLowerCase() === 'm') ? gender = 'Mr' : gender = 'Mrs';
    return 'Hello my name is ' + gender + ' ' + this.lastName + ' and I teach ' + this.subject;
}

var carlosth = new Teacher('Carlos','Ramos',23,'m',['swimg','develop','tv','movies'],'math')
console.log('3) Teacher');
console.log(carlosth.greeting());
console.log(carlosth.farewell());
console.log(carlosth.bio());

