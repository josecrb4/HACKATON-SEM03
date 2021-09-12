//Ejercicio 0
function unique(arr) { /* your code */}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert( unique(values) ); // Hare, Krishna, :-O


// EJERCICIO 1

let arr = ['nap' , 'teachers' , 'cheaters' , 'PAN' , 'ear' , 'era' , 'hectares']

const aclean = (arr) => {
    let map = new Map();

    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);      
    } 
    return Array.from(map.values());
}

console.log(aclean(arr));

// EJERCICIO 2

let map = new Map();
map.set("name", "John");
let keys = map.keys();// Error: keys.push is not a function keys.push("more");
let keys2 = Array.from(map.keys());
keys2.push("more");
console.log(keys2);

//EJERCICIO 3

console.log('ejercicio 3')
let i = 3;
while (i) {
    //alert(i--); 
    console.log(i--);
}

//Ejercicio 4
console.log('ejercicio 4')

let i1 = 0; while (++i1 < 5) console.log(i1);
let i2 = 0; while (i2++ < 5) console.log(i2);

//Ejercicio 5

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }
    ask(
    "Do you agree?",
    function() {
    alert("You agreed."); },
    function() {
    alert("You canceled the execution."); }
    );

    
//Ejercicio 6

console.log('Ejercicio 6')

const makeCounter =  { 
    count: 0 ,
    counter: function() { 
      return  this.count + 1; 
    },
    set: function(value) { 
      return this.count = value; 
    },
    decrease: function() {
      return this.count - 1;
    } 
  }  
  console.log(makeCounter.counter());
  console.log(makeCounter.set(100));
  console.log(makeCounter.decrease());

//Ejercicio 7

const bucle2 = () => {
    const prm = prompt('Enter any number or `Cancelar` for end');
    if (prm == 'Cancelar' || prm == '' || prm == null || prm == undefined) {

    } else if (prm > 100) {

    } else {
        bucle2();
    }
};
bucle2();

  //Ejercicio 8

console.log('ejercicio 8')

  let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(list);
function fn1(list) {
    console.log(list.value);
    if (list.next) {
        fn1(list.next);
    }
}

var fn2 = (list) => { console.log(list.value); if (list.next) { fn1(list.next); } }

fn1(list);
fn2(list);




 