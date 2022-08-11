class Cliente {
    constructor(nombre,fecha,direccion){
        this.nombre=nombre;
        this.fecha=fecha;
        this.direccion=direccion;
    }

mostrarDatos(){
    return `nombre: ${this.nombre} direccion: ${this.direccion}`
    }
}

let miObjet = new Cliente('Alejandro', '21-07-2022','rampa Saverio de Bonis 3, Pietragalla')
console.log(miObjet);
console.log(miObjet.mostrarDatos());
 
 