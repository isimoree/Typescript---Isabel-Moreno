"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = exports.tipotelefono = void 0;
var tipotelefono;
(function (tipotelefono) {
    tipotelefono[tipotelefono["personal"] = 0] = "personal";
    tipotelefono[tipotelefono["trabajo"] = 1] = "trabajo";
    tipotelefono[tipotelefono["otro"] = 2] = "otro";
})(tipotelefono = exports.tipotelefono || (exports.tipotelefono = {}));
class telefono {
    constructor(_tipo, _numtelefono) {
        this.tipo = _tipo;
        this.numtelefono = _numtelefono;
    }
    get Obtenertipotelefono() {
        return this.tipo;
    }
    get Obtenernumtelefono() {
        return this.numtelefono;
    }
    set Establecertipotelefono(_tipo) {
        this.tipo = _tipo;
    }
    set Establecernumtelefono(_numtelefono) {
        this.numtelefono = _numtelefono;
    }
    toString() {
        return "    Tipo telefono: " + tipotelefono[this.tipo] + "\n" +
            "   Telefono: " + this.numtelefono;
    }
}
exports.telefono = telefono;
