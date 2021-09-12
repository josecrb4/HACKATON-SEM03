// EJERCICIO 2

let map = new Map();
map.set("name", "John");
let keys = map.keys();// Error: keys.push is not a function keys.push("more");
let keys2 = Array.from(map.keys());
keys2.push("more");
console.log(keys2);

//EJERCICIO 3

let i = 3;
while (i) {
    //alert(i--); 
    console.log(i--);
}


//

//La forma de prefijo ++ i:
let i1 = 0; while (++i1 < 5) console.log(i1);
//La forma sufijo i ++
let i2 = 0; while (i2++ < 5) console.log(i2);
console.log("==========Resultado Ejercicio #4==========")
console.log("los resultados otbenidos de los array son distintos debido '++i1' y 'i2++'");