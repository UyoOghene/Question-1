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
let personOne = {firstName: 'andy', lastName: 'ugbawa', age: 40, stateOfOrigin: 'Delta' };

let person = document.createElement('p');
person.setAttribute('id','pers' );
text.appendChild(person);
person.style.backgroundColor ='lightblue'
person.style.fontSize ='2em';
person.style.color ='red';
person.innerHTML = " firstName: 'andy', lastName: 'ugbawa', age: 40, stateOfOrigin: 'Delta' ";

// Question 5
