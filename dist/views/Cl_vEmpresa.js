export default class v_empresa {
    lblHombres;
    lblPorcentaje;
    btnAgregar;
    constructor() {
        this.lblHombres = document.getElementById("lblHombres");
        this.lblPorcentaje = document.getElementById("lblPorcentaje");
        this.btnAgregar = document.getElementById("btnAgregar");
    }
    reportarEmpresa(hombres, porcentaje) {
        this.lblHombres.innerHTML = hombres.toString();
        this.lblPorcentaje.innerHTML = porcentaje.toFixed(2) + "%";
    }
    vincularEvento(manejador) {
        this.btnAgregar.onclick = manejador;
    }
}
