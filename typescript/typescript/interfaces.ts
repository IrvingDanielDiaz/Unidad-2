(()=>{
    interface Xmen{ 
        nombre:string;
        edad:number;
        poder:string;
    }

    const enviarMision = (hulk:Xmen)=>{
        console.log(`Enviando a ${hulk.nombre} a navegar`);
    }
    const ironman:Xmen ={
        nombre:'Tony Stark',
        edad:45,
        poder:'Millonario'
    }
    
enviarMision(ironman)


})();
