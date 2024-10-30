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
    console.table(producte);
}
function MostrarProductes(productes){
    const allproductes = productes.map(producte => {
        console.table(producte);
    });
    return allproductes;
}
const producte = llegirProductes()[0];
function MostrarProducte(producte){
    console.table(producte);

}

console.log('Mostrar producte Tasca 2');
MostrarProducte(producte);
console.log('Mostrar tots els productes Tasca 3');

MostrarProductes(productes);
console.log('Mostrar producte segons la ID Tasca 4');
MostrarProducteSegonsLaID(productes, 2);
