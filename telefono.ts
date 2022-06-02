export enum tipotelefono {personal, trabajo, otro}
export class telefono {
    private tipo:tipotelefono;
    private numtelefono:number;
constructor( _tipo:tipotelefono , _numtelefono:number) {
    this.tipo = _tipo;
    this.numtelefono = _numtelefono
}
get Obtenertipotelefono () {
    return this.tipo 
}
get Obtenernumtelefono () {
    return this.numtelefono
}
set Establecertipotelefono (_tipo:tipotelefono) {
    this.tipo = _tipo
}
set Establecernumtelefono (_numtelefono:number) {
    this.numtelefono = _numtelefono
}
public toString(): string{
return "    Tipo telefono: " + tipotelefono[this.tipo] +"\n"+
"   Telefono: "+this.numtelefono;
}
}
