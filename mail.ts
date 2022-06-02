export enum Tipoemail {personal , trabajo, otro}
export class mail{
    private tipo:Tipoemail;
    private direccionmail:string;
constructor( tipo:Tipoemail , _direccionmail:string) {
    this.tipo = tipo;
    this.direccionmail = _direccionmail
}
get ObtenerTipomail () {
    return this.tipo
}
get Obtenerdireccionmail () {
    return this.direccionmail
}
set Establecertipomail (_tipo: Tipoemail) {
     this.tipo = _tipo   
}
set Establecerdireccionmail(_direccionmail:string) {
    this.direccionmail= _direccionmail
}
public toString(): string{
    return "    Tipo: " +this.tipo+"\n"+
    "   Direccion Mail: "+this.direccionmail;
}
}

