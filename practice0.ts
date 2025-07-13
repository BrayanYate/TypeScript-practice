const metodo = (a: any): any => a;

metodo(1); // metodo (number) => number
metodo('hola'); // metodo (string) => string
metodo(true); // metodo (boolean) => boolean 

//--------------typescript/Tipado fuete-----------------
let a = 1; // number
//a = 'hola'; // Error: Type 'string' is not assignable to type 'number'
//---ventajas de typescript
// 1. seguridad 
// 2. mantrnibilidad
// 3. refactorización
//-----------typescript/clases-----------------
class Stream {
    public tema: string;
    constructor(tema: string) {
        this.tema = tema;
    }
}

interface Stream {
    tema: string;
    prender(): void;
}
//---------Las clases y Interface son tipos 
class Persona {
    //private nombre: string;
    nombre:string; // public por defect
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    getNombre(): string {
        return this.nombre;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    //en javascript hay que comprobar primero - mas codigo 
    // setNombre2(nombre: any): void {
    //     if (typeof nombre == 'string') {
    //     this.nombre = nombre;
    //     }
    // }
}
const persona = new Persona('Juan')
//persona.setNombre(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//----------interface
interface PersonaInterface {
    nombre: string;
    getNombre(): string;
    setNombre(nombre: string): void;
}
//let persona2: PersonaInterface = persona; // Asignación válida
//let personaPosible : PersonaInterface = Persona; //-cumple el contrato de la interfaz
//---------------Con un endpoit 
const persona2 = {
    nombre:"juan",
    getNombre(): string {
        return this.nombre;
    },
    setNombre (nombre : string):void { 
        this.nombre = nombre;
    },
};

const sendData = (persona: PersonaInterface): void => {
    console.log(`Enviando datos de ${persona.getNombre()}`);
}

sendData(persona2); 
//enum 
//diccionario  - cuando cambio un dato cambia en todas las referencias que se usa 
const keys = {
    a: 'a',
    b: 'b',
    c: 'c', 
} 
const personadic = {
    ARG:"dni", // ejemṕlo que no se use mas nit sino pasaparte solo se cambia aca
    ES: "nie",
    COL: "cc",
}
type ARG = string; // alias - si cambia a un number cambia en todas las referencias que se us

const dni = personadic.ARG;
 type NITYPE = "pasaporte" | "dni" | "cc"; //probelmatica se tiene que sobre escribir todo el tiempo

enum NiENUM {
    ARG ="dni", // ejemṕlo que no se use mas nit sino pasaparte solo se cambia aca
    ES ="nie",
    COL= "cc",
}
const dniEnum = NiENUM.ARG;
const dimeELNI = (ni: NITYPE ):NITYPE =>ni;
dimeELNI("pasaporte"); // Error: Argument of type '"pasaporte"' is not assignable to parameter of type 'NiENUM'.
// union y intersection 
type A = string | number; 
type B = string & number; 

const medtodoI = (a:A):A =>a;

interface Alumno {
    nombre:string;
    nota:number;
}

interface profesor {
    nombre:string;
    asignatura:string;
}

type AlumnoUProfesor = Alumno | profesor;

const persona_union: AlumnoUProfesor = {
    nombre: "Juan",
    nota: 10,
    //asignatura: "Matemáticas"
} 

const metodoUnion = (perosna:AlumnoUProfesor) =>{
   // perosna.nota; // Error: Property 'nota' does not exist on type 'AlumnoUProfesor'.
    perosna.nombre; // Acceso válido
}

persona_union; 