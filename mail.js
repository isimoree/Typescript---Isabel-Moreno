"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = exports.Tipoemail = void 0;
var Tipoemail;
(function (Tipoemail) {
    Tipoemail[Tipoemail["personal"] = 0] = "personal";
    Tipoemail[Tipoemail["trabajo"] = 1] = "trabajo";
    Tipoemail[Tipoemail["otro"] = 2] = "otro";
})(Tipoemail = exports.Tipoemail || (exports.Tipoemail = {}));
class mail {
    constructor(tipo, _direccionmail) {
        this.tipo = tipo;
        this.direccionmail = _direccionmail;
    }
    get ObtenerTipomail() {
        return this.tipo;
    }
    get Obtenerdireccionmail() {
        return this.direccionmail;
    }
    set Establecertipomail(_tipo) {
        this.tipo = _tipo;
    }
    set Establecerdireccionmail(_direccionmail) {
        this.direccionmail = _direccionmail;
    }
    toString() {
        return "    Tipo: " + this.tipo + "\n" +
            "   Direccion Mail: " + this.direccionmail;
    }
}
exports.mail = mail;
