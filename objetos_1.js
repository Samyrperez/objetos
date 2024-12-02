//OBJETOS
//los objetos son todo lo que no es un dato primitivo
//Es una coleccion de mapas
//Coleccion de datos relacionados, tipo clave valor o funcionalidades.

//sintaxis

let person = {
    //deifinimos la clave:name y el valor seria en este caso: "Brais"
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}
//Los objetos pueden contener propiedades, funciones, otros objetos
//¿Como acceder a las propiedades?

//Con la notaciones punto
console.log(person.name)

//Notación de corchetes
console.log(person["name"])

//Modificar las propiedades de un objeto

person.name ="Brais Moure"
console.log(person.name)

person.age = "37"
console.log(person.age) 

//Notamos que cambiamos el tipo de valor a la edad, con la funcion "typeof" podemos ver la clase de dato que es
console.log(typeof person.age)

//Eliminar propiedades

delete person.age
console.log(person)

//Añadir un nueva propiedad

person.email = "samyr.perez@gmail.com"
console.log(person)