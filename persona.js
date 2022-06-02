"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
class persona {
    constructor(_nombre, _apellido, _edad, _DNI, _cumpleaños, _colorfavorito, _sexo, _calle, _direccionmail, _numtelefono, _notas) {
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.edad = _edad;
        this.DNI = _DNI;
        this.cumpleaños = _cumpleaños;
        this.colorfavorito = _colorfavorito;
        this.sexo = _sexo;
        this.direccion = _calle;
        this.mail = _direccionmail;
        this.telefono = _numtelefono;
        this.notas = _notas;
    }
    get Obtenernombre() {
        return this.nombre;
    }
    get Obtenerapellido() {
        return this.apellido;
    }
    get Obteneredad() {
        return this.edad;
    }
    get ObtenerDNI() {
        return this.DNI;
    }
    get Obtenercumpleaños() {
        return this.cumpleaños;
    }
    get Obtenercolorfavorito() {
        return this.colorfavorito;
    }
    get Obtenersexo() {
        return this.sexo;
    }
    get Obtenerdireccion() {
        return this.direccion;
    }
    get Obtenermail() {
        return this.mail;
    }
    get Obtenertelefono() {
        return this.telefono;
    }
    get Obtenernotas() {
        return this.notas;
    }
    set Establecernombre(_nombre) {
        this.nombre = _nombre;
    }
    set Establecerapellido(_apellido) {
        this.apellido = _apellido;
    }
    set Estableceredad(_edad) {
        this.edad = _edad;
    }
    set EstablecerDNI(_DNI) {
        this.DNI = _DNI;
    }
    set Establecercumpleaños(_cumpleaños) {
        this.cumpleaños = _cumpleaños;
    }
    set Establecercolorfavorito(_colorfavorito) {
        this.colorfavorito = _colorfavorito;
    }
    set Establecersexo(_sexo) {
        this.sexo = _sexo;
    }
    set Establecerdireccion(_direccion) {
        this.direccion = _direccion;
    }
    set Establecermail(_direccionmail) {
        this.mail = _direccionmail;
    }
    set Establecertelefono(_numtelefono) {
        this.telefono = _numtelefono;
    }
    set Establecernotas(_notas) {
        this.notas = _notas;
    }
    toString() {
        return "Nombre: " + this.nombre + "\n" +
            "Apellido: " + this.apellido + "\n" +
            "DNI: " + this.DNI + "\n" +
            "Cumpleaños: " + this.cumpleaños + "\n" +
            "Color favorito: " + this.colorfavorito + "\n" +
            "Sexo: " + this.sexo + "\n" +
            "Dirección:\n" + this.direccion.toString() + "\n" +
            "Mail:\n" + this.mail.toString() + "\n" +
            "Teléfono:\n" + this.telefono.toString() + "\n" +
            "Notas: " + this.notas;
    }
}
exports.persona = persona;
