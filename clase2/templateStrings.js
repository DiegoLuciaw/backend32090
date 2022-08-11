//Los template string utilizan las comillas invertidas ` (grave accent o backtick) para delimitar las cadenas, en lugar de las comillas sencillas o dobles.

//Si se utiliza ${ } dentro de su expresión se habilita la interpolación, sustituyendo el fragmento por el valor al que apunta. Pueden ejecutar código en su interior.

//Soportan texto multilínea, manteniendo el formato introducido, incluyéndose los saltos de línea y las tabulaciones.


const saludo = (nombre)=>{
    return `Hola ${nombre}, como te va?`
}

console.log(saludo('diego'));
console.log(saludo('pedro'))
console.log(saludo('milanesa'))