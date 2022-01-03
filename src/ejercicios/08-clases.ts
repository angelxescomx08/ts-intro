class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion1: string,
    ){}
}

class Heroe extends PersonaNormal {
    //private alterEgo: string;
    //public edad: number;
    //static nombreReal: number;

    constructor(
        public alterEgo?: string,
        public edad1?: number,
        public nombreReal?: string
    ){
        super(nombreReal,' Nwe York, USA');
    }
}

const ironman = new Heroe();

console.log(ironman);