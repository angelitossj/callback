const obtenerInformacion=(texto)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{resolve(texto)},Math.random()*200)
    }
)}

obtenerInformacion("1: pito").then(resultado=>
    console.log(resultado))

    obtenerInformacion("2: bernardo").then(resultado=>
        console.log(resultado))

        obtenerInformacion("3: eduardo").then(resultado=>
            console.log(resultado))



const mostrarData=async()=>{
    
    data1= await obtenerInformacion("1: pito")
    data2= await obtenerInformacion("2: bernardo");
    data3= await obtenerInformacion("3: eduardo");

    console.log(data1)
    console.log(data2)
    console.log(data3)
}

mostrarData()