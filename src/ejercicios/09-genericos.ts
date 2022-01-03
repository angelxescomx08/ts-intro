
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArr = queTipoSoy([1,2,3]);