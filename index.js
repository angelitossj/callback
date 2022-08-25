//Funcion dentro de otra funcion
// function prueba (callback){
//     callback("roberto")
// }

// function decirNombre(nombre){
//     console.log(nombre)
// }
// prueba(decirNombre)

//segunda Practica
//creamos una clase Persona
class Persona {
    constructor(nombre, instragram) {
        this.nombre = nombre;
        this.instragram = instragram;
    }
}

const data = [
    ["lucas dalto", "@soydalto"],
    ["Angel"],
    ["Isabel", "@isabelita"],
    ["Pedro", "@Puflito"]
];

let personas = [];
for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1])
}




const obtenerPersona = (id) => {
 return new Promise ((resolve,reject)=>{
    if (personas[id] == undefined) reject("No se ha encotrado la persona");
    else{resolve(personas[id])}
 })



   
}
const obtenerInstagram=(id)=>{
   return new Promise ((resolve,reject)=>{
    if (personas[id].instragram == undefined)reject("No se ha encontrado el instagram");else {resolve(personas[id].instragram)}
   })
    }

    obtenerPersona(1).then((persona)=>{
        console.log(persona.nombre)
      return  obtenerInstagram(1)
    }).then((instragram)=>{
        console.log(instragram)
    }).catch((error)=>{
        console.log(error)
    })


//     Promesas

// representan terminacion de una operacion asincro
//fracaso de una operacion asincrona

// let nombre= "Pedo";

// const promesa= new Promise ((resolve,reject)=>{
//     if (nombre!=="Pedro")
//     reject("Lo siento el nombre Pedro no se ha encontrado");
//      else resolve(nombre)
// })

// promesa.then((resultado)=>{
//     console.log(resultado)
// }).catch((error)=>{
//     console.log(error)
// })

//Copia de cogigo 
// class Persona {
//     constructor(nombre, instragram) {
//         this.nombre = nombre;
//         this.instragram = instragram;
//     }
// }

// const data = [
//     ["lucas dalto", "@soydalto"],
//     ["Angel"],
//     ["Isabel", "@isabelita"],
//     ["Pedro", "@Puflito"]
// ];

// let personas = [];
// for (let i = 0; i < data.length; i++) {
//     personas[i] = new Persona(data[i][0], data[i][1])
// }




// const obtenerPersona = (id, callback) => {
//     if (personas[id] == undefined) {
//         callback("No se ha encontrado la persona")
//     } else {
//         callback(null,personas[id],id)
//     }

   
// }
// const obtenerInstagram=(id,callback)=>{
//     if (personas[id].instragram == undefined){
//         callback("No se ha encontrado el instragram")
//     }
//     else{
//         callback(null,personas[id].instragram)
//     }
    
//     }

//     obtenerPersona(1,(err, persona,id) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(persona.nombre)
//             obtenerInstagram(id,(err,instragram)=>{
//                 if (err){
//                     console.log(err)
//                 }
//                 else{
//                     console.log(instragram)
//                 }
//             })
            
//     }
//     })
