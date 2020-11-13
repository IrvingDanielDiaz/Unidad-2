(()=>{
    const avenger = {
        nombre:"Iron Man",
        clave:"Iron Man",
        poder:"Millonario"
    }
        const extraer = ({nombre,poder}:any)=>{
      console.log(avenger.nombre);
      console.log(avenger.poder);
}

const integrante:string[]=['Iron Man','Capitan','hombrearaña']

const [ , ,Capitan] =  integrante;


console.log(integrante[0]);
console.log(integrante[1]);
console.log(integrante[2]);

console.log(Capitan);

const extraerArreglo = (tripulacion:String[])=>{
    console.log(tripulacion[0]);
    console.log(tripulacion[1]);
    console.log(tripulacion[2]);
}
extraerArreglo(integrante);

 
})();