"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const persona_1 = require("./persona");
function buscarporDNI(_dni, _arrayPersonas) {
    let _per = null;
    _arrayPersonas.forEach(per => {
        if (per.ObtenerDNI == _dni) {
            _per = per;
        }
    });
    return _per;
}
let arrayPersonas = [];
var direccion1 = new direccion_1.direccion("Manuel Becerra", 3, 1, "A", 28023, "Madrid", "Madrid");
var mail1 = new mail_1.mail(1, "juanru@js.com");
var telefono1 = new telefono_1.telefono(0, 678909089);
var persona1 = new persona_1.persona("Juan", "Ruiz", 23, "51190846B", "15/09/1980", "Rojo", "masculino", direccion1, mail1, telefono1, " No quiere comunicaciones");
arrayPersonas.push(persona1);
var direccion2 = new direccion_1.direccion("Lopez de Hoyos", 4, 4, "c", 28056, "Madrid", "Madrid");
var mail2 = new mail_1.mail(1, "lourdesmu@js.com");
var telefono2 = new telefono_1.telefono(0, 652436581);
var persona2 = new persona_1.persona("Lourdes", "Muñoz", 28, "57895646W", "11/01/1984", "Amarillo", "femenino", direccion2, mail2, telefono2, " Comprará el pack");
arrayPersonas.push(persona2);
var direccion3 = new direccion_1.direccion("Serrano", 112, 3, "H", 28005, "Madrid", "Madrid");
var mail3 = new mail_1.mail(1, "aitorlo@js.com");
var telefono3 = new telefono_1.telefono(0, 652436581);
var persona3 = new persona_1.persona("Aitor", "Lopez", 28, "48575846M", "05/03/1980", "Amarillo", "masculino", direccion3, mail3, telefono3, "Necesita extra");
arrayPersonas.push(persona3);
arrayPersonas.forEach(per => {
    console.log(per.toString());
});
console.log("\n------------------------------------\n");
var cambio1 = buscarporDNI("51190846B", arrayPersonas);
if (cambio1 != null) {
    cambio1.Establecerdireccion = new direccion_1.direccion("Callao", 43, 2, "A", 28003, "Madrid", "Madrid");
}
var cambio2 = buscarporDNI("57895646W", arrayPersonas);
if (cambio2 != null) {
    cambio2.Establecermail = new mail_1.mail(0, "nuevoLourdesM@js.com");
}
var cambio3 = buscarporDNI("48575846M", arrayPersonas);
if (cambio3 != null) {
    cambio3.Establecertelefono = new telefono_1.telefono(1, 999999999);
}
arrayPersonas.forEach(per => {
    console.log(per.toString());
});
