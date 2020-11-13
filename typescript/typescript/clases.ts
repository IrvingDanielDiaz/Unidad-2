(()=>{
    class Avenger {//Notación camello mayúscula
        constructor(public nombre:string,
                    public equipo:string,
                    public nombreReal:string,
                    public usarioFruta:boolean=true,
                    public peleasGanadas:number=8){
        }
    } 
        const hulk = new Avenger('Brazos','zapatos','hulk');
        console.log(hulk);
}
)();
