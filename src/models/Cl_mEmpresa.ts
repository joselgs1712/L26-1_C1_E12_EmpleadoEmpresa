import cl_empleado from "./Cl_mEmpleado";

export default class cl_empresa {
  private cntHombres: number;
  private cntMujeres: number;

  constructor() {
    this.cntHombres = 0;
    this.cntMujeres = 0;
  }

  procesarEmpleado(e: cl_empleado): void {
    if (e.sexo === "M") this.cntHombres++;
    else if (e.sexo === "F") this.cntMujeres++;
  }

  cantidadHombres(): number { return this.cntHombres; }

  porcentajeMujeres(): number {
    let total = this.cntHombres + this.cntMujeres;
    return total > 0 ? (this.cntMujeres / total) * 100 : 0;
  }
}