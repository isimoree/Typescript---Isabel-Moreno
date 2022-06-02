"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
class direccion {
    constructor(_calle, _numero, _piso, _letra, _codigopostal, _poblacion, _provincia) {
        this.calle = _calle;
        this.numero = _numero;
        this.piso = _piso;
        this.letra = _letra;
        this.codigopostal = _codigopostal;
        this.poblacion = _poblacion;
        this.provincia = _provincia;
    }
    get Obtenercalle() {
        return this.calle;
    }
    get Obtenernumero() {
        return this.numero;
    }
    get Obtenerpiso() {
        return this.piso;
    }
    get Obtenerletra() {
        return this.letra;
    }
    get Obtenercodigopostal() {
        return this.codigopostal;
    }
    get Obtenerpoblacion() {
        return this.poblacion;
    }
    get Obtenerprovincia() {
        return this.provincia;
    }
    set Establecercalle(_calle) {
        this.calle = _calle;
    }
    set Establecernumero(_numero) {
        this.numero = _numero;
    }
    set Establecerpiso(_piso) {
        this.piso = _piso;
    }
    set Establecerletra(_letra) {
        this.calle = _letra;
    }
    set Establecercodigopostal(_codigopostal) {
        this.codigopostal = _codigopostal;
    }
    set Establecerpoblacion(_poblacion) {
        this.poblacion = _poblacion;
    }
    set Establecerprovincia(_provincia) {
        this.provincia = _provincia;
    }
    toString() {
        return "    Calle: " + this.calle + " " + this.numero + "\n" +
            "   Piso: " + this.piso + "\n" +
            "   Letra: " + this.letra + "\n" +
            "   Codigo Postal: " + this.codigopostal + "\n" +
            "   Poblacion: " + this.poblacion + "\n" +
            "   Provincia: " + this.provincia + "\n";
    }
}
exports.direccion = direccion;
