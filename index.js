const { Console } = require("console");
const fs = require("fs"); // Importa el mòdul fs



//Tasca 1 Llegir el fitxer JSON i retornar un array d'objectes
function llegirProductes(){
    try{
        const data = fs.readFileSync("productes.json", "utf-8");
        const parsedData = JSON.parse(data);
        
        return parsedData;
    }catch(err){
        console.error(err);
    }
   
}

const  productes = llegirProductes()
function MostrarProducteSegonsLaID(productes, id){
    const producte = productes.find(producte => producte.id === id);
    console.log(producte);
}
function MostrarProductes(productes){
    console allproductes = productes.map(producte => {
        console.log(producte);
    });
}
console.log('Mostrar tots els productes');

MostrarProductes(productes);
console.log('Mostrar producte segons la ID');
MostrarProducteSegonsLaID(productes, 2);