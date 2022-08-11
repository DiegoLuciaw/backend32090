//Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
//Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.
//Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.
//1
/*function mostrarLista(...lista){
    if (lista.length === 0){
        console.log('lista vacia')
    } else {
        console.log(lista)
    }; 
};
mostrarLista([4,5,6]);
mostrarLista();*/

//2()()
/*(function(...lista){
    if (lista.length === 0){
        console.log('lista vacia')
        }else {
            console.log(lista)
        };
})();*/
//3 duplicar y triplicar con funciones anónimas
/*
function crearMultiplicador(a,b){
    let multiplicacion = (a*b)
    let resultado = multiplicacion
    console.log(multiplicacion);
    }
*/
    

    function multiplicador(a){
        return (b)=>{
        return a*b;   
        }
    }
    const duplicar = multiplicador(2)
    const triplicar = multiplicador(3)
    console.log(duplicar(3));
    console.log(triplicar(3));