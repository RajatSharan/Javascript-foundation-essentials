const person = {

    firstName: 'Rajat',
    LastName: 'Sharan',
    age: 30,
    Occupation: 'QA'
};

console.log(person.firstName);
console.log(person['LastName']);
console.log(person.age);
console.log(person.Occupation);
console.log(person['firstName'] + ' ' + person['LastName'] + ' is a ' + person.Occupation + ' and is ' + person.age + ' years old.');