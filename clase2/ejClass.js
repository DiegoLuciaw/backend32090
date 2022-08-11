//En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello:
//1- Definir la clase Contador.
//2- Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
//3- Cada instancia inicia su cuenta individual en cero.
//4- La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.
//5- Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
//6- Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
//7- Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
//8- Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general

// 1 definir contador
class Contador{
    static cuentaGlobal=0;
    constructor(responsable){
        this.responsable=responsable;
        this.cuentaIndividual=0;
    }
    getResponsable(){
        return this.responsable;
    }
    getCuentaIndividual(){
        return this.cuentaIndividual;
    }
    getCuentaGlobal(){
        return Contador.cuentaGlobal;
    }
    contar(){
        this.cuentaIndividual++;
         Contador.cuentaGlobal++;
    }
}
const r1 = new Contador('Juan')
const r2 = new Contador('Pedro')

r1.contar()
r1.contar()
r1.contar()

r2.contar()
r2.contar()
r2.contar()
r2.contar()

console.log(`r1 ind: ${r1.getCuentaIndividual()}`);
console.log(`r1 gobal: ${r1.getCuentaGlobal()}`);

console.log(`r2 ind: ${r2.getCuentaIndividual()}`);
console.log(`r2 gobal: ${r2.getCuentaGlobal()}`);