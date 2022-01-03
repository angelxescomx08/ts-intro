import { Producto,calculaISV } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono2',
        precio: 200
    }
];

const [total,isv] = calculaISV(carritoCompras);
console.log('total',total)
console.log('isv',isv)