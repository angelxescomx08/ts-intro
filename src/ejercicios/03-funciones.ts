function sumar(a:number,b:number):number{
    return a+b;
}

const sumarFetcha = (a:number,b:number):number=>{
    return a+b;
}

function multiplicar(numero:number,otroNumero?:number,base:number=2):number{
    return numero*base
}

const resultado = multiplicar(5,2);

console.log(resultado)

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: ()=>void
}

function curar(personaje:PersonajeLOR,curarX:number):void{
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'angel',
    pv: 50,
    mostrarHp(){
        console.log('vida',this.pv)
    }
}

curar(nuevoPersonaje,100);
nuevoPersonaje.mostrarHp();