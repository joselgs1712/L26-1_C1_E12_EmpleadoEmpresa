export default class v_empresa {
  private lblHombres: HTMLElement;
  private lblPorcentaje: HTMLElement;
  private btnAgregar: HTMLButtonElement;

  constructor() {
    this.lblHombres = document.getElementById("lblHombres") as HTMLElement;
    this.lblPorcentaje = document.getElementById("lblPorcentaje") as HTMLElement;
    this.btnAgregar = document.getElementById("btnAgregar") as HTMLButtonElement;
  }

  reportarEmpresa(hombres: number, porcentaje: number): void {
    this.lblHombres.innerHTML = hombres.toString();
    this.lblPorcentaje.innerHTML = porcentaje.toFixed(2) + "%";
  }

  vincularEvento(manejador: any): void {
    this.btnAgregar.onclick = manejador;
  }
}