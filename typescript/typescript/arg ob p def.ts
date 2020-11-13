(function(){
    function activar(quien:string,
                     objeto:string='boomerang',
                     momento?:string){
                        if(momento){
                            console.log(`${quien} usó el ${objeto} contra ${momento}`);
                        }else{
                            console.log(`${quien} usó el ${objeto}`);
                        }   
    }
  activar('Irving','Boomerang','Lucius');
  activar('Irving','Lucius');
})();