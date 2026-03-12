export default class cl_empleado {
    _nombre;
    _sexo;
    constructor(nombre, sexo) {
        this._nombre = nombre;
        this._sexo = sexo.toUpperCase();
    }
    set nombre(n) { this._nombre = n; }
    get nombre() { return this._nombre; }
    set sexo(s) { this._sexo = s.toUpperCase(); }
    get sexo() { return this._sexo; }
}
