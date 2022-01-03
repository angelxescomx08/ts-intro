interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Demons',
    detalles:{
        autor: 'Imagine dragons',
        anio: 2015
    }
}

const {volumen,segundo,cancion,detalles} = reproductor;
const {autor}= detalles;

//console.log('el volumen actual es de: ',volumen)
//console.log('el segundo actual es de: ',segundo)
//console.log('la cancion actual es: ',cancion)
//console.log('el autor es: ',autor)

const dbz: string[] = ['goku','vegeta','trunks'];
const [p1,p2,p3] = dbz;

console.log('personaje 1:',p1);
console.log('personaje 2:',p2);
console.log('personaje 3:',p3);