export class direccion {
    private calle: string;
    private numero:number;
    private piso:number;
    private letra:string;
    private codigopostal:number;
    private poblacion:string;
    private provincia:string;

constructor (_calle:string , _numero:number, _piso:number, _letra:string, _codigopostal:number, _poblacion:string, _provincia:string) {
        this.calle =_calle;
        this.numero = _numero;
        this.piso = _piso;
        this.letra = _letra;
        this.codigopostal = _codigopostal;
        this.poblacion = _poblacion;
        this.provincia = _provincia;
    }    
    get Obtenercalle () {
        return this.calle
    }
    get Obtenernumero () {
        return this.numero
    }
    get Obtenerpiso () {
        return this.piso
    }
    get Obtenerletra () {
        return this.letra
    }
    get Obtenercodigopostal () {
        return this.codigopostal
    }
    get Obtenerpoblacion () {
        return this.poblacion
    }
    get Obtenerprovincia () {
        return this.provincia
    }
    set Establecercalle (_calle:string) {
        this.calle= _calle
    }
    set Establecernumero (_numero:number) {
        this.numero= _numero
    }
    set Establecerpiso (_piso:number) {
        this.piso= _piso
    }
    set Establecerletra (_letra:string) {
        this.calle= _letra
    }
    set Establecercodigopostal (_codigopostal:number) {
        this.codigopostal= _codigopostal
    }
    set Establecerpoblacion (_poblacion:string) {
        this.poblacion= _poblacion
    }
    set Establecerprovincia (_provincia:string) {
        this.provincia= _provincia
    }
    public toString(): string{
        return "    Calle: "+ this.calle +" "+ this.numero+"\n"+
        "   Piso: " +this.piso+"\n"+
        "   Letra: "+this.letra+"\n"+
        "   Codigo Postal: "+this.codigopostal+"\n"+
        "   Poblacion: " +this.poblacion+"\n"+
        "   Provincia: "+this.provincia+"\n";
    }

        
    }





