export default class cl_empleado {
  private _nombre: string;
  private _sexo: string;

  constructor(nombre: string, sexo: string) {
    this._nombre = nombre;
    this._sexo = sexo.toUpperCase();
  }

  set nombre(n: string) { this._nombre = n; }
  get nombre(): string { return this._nombre; }

  set sexo(s: string) { this._sexo = s.toUpperCase(); }
  get sexo(): string { return this._sexo; }
}