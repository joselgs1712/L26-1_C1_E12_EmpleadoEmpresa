export default class v_empresa {
  private lblHombres: HTMLElement;
  private lblPorcentaje: HTMLElement;
  private lblTotal: HTMLElement;
  private btnAgregar: HTMLButtonElement;

  constructor() {
    this.lblHombres = document.getElementById("lblHombres") as HTMLElement;
    this.lblPorcentaje = document.getElementById("lblPorcentaje") as HTMLElement;
    this.lblTotal = document.getElementById("lblTotal") as HTMLElement;
    this.btnAgregar = document.getElementById("btnAgregar") as HTMLButtonElement;
  }

  reportarEmpresa(hombres: number, porcentaje: number, total: number): void {
    this.lblHombres.innerHTML = hombres.toString();
    this.lblPorcentaje.innerHTML = porcentaje.toFixed(2) + "%";
    this.lblTotal.innerHTML = total.toString();
  }

  vincularEvento(manejador: any): void {
    this.btnAgregar.onclick = manejador;
  }
}