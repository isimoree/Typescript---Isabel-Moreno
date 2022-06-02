
import { direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";
export class persona {
    private nombre:string;
    private apellido:string;
    private edad:number;
    private DNI:string;
    private cumpleaños:string;
    private colorfavorito:string;
    private sexo:string;
    private direccion:direccion;
    private mail:mail;
    private telefono:telefono;
    private notas:string
constructor (_nombre:string , _apellido:string , _edad:number, _DNI: string, _cumpleaños:string, _colorfavorito:string, _sexo:string, _calle:direccion, _direccionmail:mail, _numtelefono:telefono, _notas:string) {
    this.nombre = _nombre
    this.apellido = _apellido
    this.edad =_edad
    this.DNI = _DNI
    this.cumpleaños =_cumpleaños
    this.colorfavorito = _colorfavorito
    this.sexo= _sexo
    this.direccion = _calle
    this.mail = _direccionmail
    this.telefono = _numtelefono
    this.notas=_notas
}
get Obtenernombre () {
    return this.nombre
}
get Obtenerapellido () {
    return this.apellido
}
get Obteneredad () {
        return this.edad
}
get ObtenerDNI () {
    return this.DNI
}
get Obtenercumpleaños () {
    return this.cumpleaños
}
get Obtenercolorfavorito () {
    return this.colorfavorito
}
get Obtenersexo () {
    return this.sexo
}
get Obtenerdireccion () {
    return this.direccion
}
get Obtenermail () {
    return this.mail
}
get Obtenertelefono () {
    return this.telefono
}
get Obtenernotas () {
    return this.notas
}
set Establecernombre (_nombre:string) {
    this.nombre = _nombre
}
set Establecerapellido (_apellido:string) {
    this.apellido = _apellido
}
set Estableceredad (_edad:number) {
    this.edad = _edad
}
set EstablecerDNI (_DNI:string) {
    this.DNI = _DNI
}
set Establecercumpleaños (_cumpleaños:string) {
    this.cumpleaños = _cumpleaños
}
set Establecercolorfavorito (_colorfavorito:string) {
    this.colorfavorito = _colorfavorito
}
set Establecersexo (_sexo:string) {
    this.sexo = _sexo
}
public set Establecerdireccion (_direccion:direccion) {
    this.direccion = _direccion
}
set Establecermail (_direccionmail:mail) {
    this.mail = _direccionmail
}
set Establecertelefono (_numtelefono:telefono) {
    this.telefono = _numtelefono
}
set Establecernotas (_notas:string) {
    this.notas = _notas
}
public toString(): string{
return "Nombre: " + this.nombre +"\n"+
"Apellido: " + this.apellido +"\n"+
"DNI: " + this.DNI +"\n"+
"Cumpleaños: " + this.cumpleaños+"\n"+
"Color favorito: " + this.colorfavorito+"\n"+
"Sexo: " + this.sexo+"\n"+
"Dirección:\n" +this.direccion.toString()+"\n"+
"Mail:\n" + this.mail.toString()+"\n"+
"Teléfono:\n" + this.telefono.toString()+"\n"+
"Notas: " + this.notas;
}
}
