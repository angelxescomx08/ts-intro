interface Direccion{
    calle: string,
    pais: string,
    ciudad: string
}

interface Heroe{
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: ()=>string
}

/*const superHeroe:Heroe = {
    nombre: 'spiderman',
    edad: 30,
    direccion:{
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', '+this.direccion.ciudad+', '+this.direccion.pais;
    }
}*/

//const direccion = superHeroe.mostrarDireccion();
//console.log(direccion)