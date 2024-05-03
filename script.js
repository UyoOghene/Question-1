// Question 1
let myNameString = 'indaboskiBahoose';
function names(myNameString){
    for (let i = 0; i < myNameString.length; i++) {
            if (myNameString[i] === myNameString[i].toUpperCase()) {
                let fname= myNameString[0].toUpperCase()+myNameString.slice(1,i)
                let lastname = myNameString.slice(i);
                return `${lastname} ${fname}`;
            }
        }
    }
    
console.log(names(myNameString));


// Question 2
let firstName = 'Andy'; let middleName = 'Eriarwe'; 
let lastName = 'Ugbawa'
function multNames(firstName,middleName,lastName){
    let f2name= firstName.toLowerCase();
    let mid2name = middleName.toLowerCase();
    let l2name = lastName.toLowerCase();
    let fullname = `${l2name}-${f2name}-${mid2name}`;
    return fullname;
}

console.log(multNames(firstName,middleName,lastName));


// Question 3
let fruits = ['orange', 'apple', 'banana', 'pawpaw', 'pear'];
let books = ['harry potter','john wick','hunger games']

function reverseArray(arr){
   return arr.reverse().join('&');      
}
console.log(reverseArray(fruits));


// Question 4
let personOne = {   firstName: 'andy',
                    lastName: 'ugbawa',
                    age: 40,
                    stateOfOrigin: 'Delta' 
                }

const text = document.querySelector('.text')
let qfour= document.createElement('p');
text.appendChild(qfour);
qfour.setAttribute('first-name',personOne.firstName);
qfour.setAttribute('last-name',personOne.lastName);
qfour.setAttribute('state-of-origin',personOne.stateOfOrigin);
qfour.setAttribute('age',personOne.age);

function four() {
    for (let key in personOne) {
        console.log(key, personOne[key]);
    }
    return qfour;                                       
}
console.log(four(personOne));

// Question 5
// e.g. newArray = ['andy', 'ugbawa', 'delta'];
function five(){
    let qfname= qfour.getAttribute("first-name");
    let qage= qfour.getAttribute("age");
    let qlastname= qfour.getAttribute("last-name");
    let qorigin= qfour.getAttribute("state-of-origin");
    let newArr=[qfname,qlastname,qorigin,qage];
    return newArr;
}
console.log(five(personOne));
