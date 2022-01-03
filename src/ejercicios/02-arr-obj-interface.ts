let habilidades: (boolean|string|number)[] = ['bash','heal'];
let arr: string[] = ['bash','heal'];

interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash','heal']
}

personaje.puebloNatal = "pueblo paleta"

console.table(personaje)