class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
       
    }
    getFullName(){
        return ` nombre completo es ${this.nombre} ${this.apellido}`;
    }
    addMascotas(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        this.libros.push({'nombre': nombre, 'autor': autor})
    }
    getBooksNames(){    
        return this.libros.map((libro) => libro.nombre);
    }

}
const user1 = new Usuario("diego", "luciaw", [{'nombre': "El Gran Libro de la Cocina Italiana", 'autor':"Carlo Bernasconi"}], ["perro", "perro"]);
console.log(user1);
console.log(user1.getFullName());
user1.addMascotas("pez");
user1.addMascotas("gato");
console.log(user1.countMascotas());
user1.addBook("Steve Jobs", "Walter Isaacson");
user1.addBook("El hombre que inventó la Formula 1", " Tom Bower");
console.log(user1.libros);
console.log(user1.getBooksNames());