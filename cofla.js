const materiasHTML= document.querySelector(".materias")

const materias =[
    {nombre:"fisica 1",nota:7},{nombre:"Calculo 1",nota:7},{nombre:"Matematicas discreta",nota:8},{nombre:"Programacion",nota:8}
];

const obtenerMateria = (id)=>{
return new Promise((resolve,reject)=>{
   let materia=materias[id];
    if ( materia == undefined)reject("La materia no existe");else setTimeout(()=>{resolve(materia)},Math.random()*400);
})
}




const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
       materia[i]= await obtenerMateria(i);
       
       let newHTMLCode=`
       <div class="materia">
    <div class="nombre">${materia[i].nombre}</div>
<div class="nota">${materia[i].nota}</div>
       `;
       materiasHTML.innerHTML+=newHTMLCode
    }
}
devolverMaterias()