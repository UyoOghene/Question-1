// Question 1
function names(myNameString){
    let fname =myNameString.slice(0,5);
    let lastname = myNameString.slice(5);
    console.log(lastname ,fname);
    }
console.log(names('manosAkpujiha'));
console.log(names('fejirAkpujiha'));


// Question 2
function multNames(fname,midname,lname){
let fullname = fname+'-'+midname+'-'+lname;
console.log(fullname);
}

multNames('Uyo','oghene','Akpujiha');


// Question 3
let fruits = ['orange', 'apple', 'banana', 'pawpaw', 'pear'];
let books = ['harry potter','john wick','hunger games']

function reverseArray(arr){
   console.log( arr.reverse().join('&'));      
}
console.log(reverseArray(fruits));
console.log(reverseArray(books));


// Question 4
const text = document.querySelector('.text')
const personOne = {};
    personOne.firstName= 'Uyo';
    personOne.lastName= 'Akpujiha';
    personOne.age= '32';
    personOne.stateOfOrigin= 'Delta';
console.log(personOne);

let person = document.createElement('p');
text.appendChild(person);
person.style.backgroundColor ='lightblue'
person.style.fontSize ='2em';
person.style.color ='red';
person.innerHTML=JSON.stringify(personOne);

// Question 5
const newArr= [personOne.age,personOne.lastName,personOne.stateOfOrigin];
console.log(newArr);