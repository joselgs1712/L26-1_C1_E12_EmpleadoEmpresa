export default class v_empresa {
    lblHombres;
    lblPorcentaje;
    lblTotal;
    btnAgregar;
    constructor() {
        this.lblHombres = document.getElementById("lblHombres");
        this.lblPorcentaje = document.getElementById("lblPorcentaje");
        this.lblTotal = document.getElementById("lblTotal");
        this.btnAgregar = document.getElementById("btnAgregar");
    }
    reportarEmpresa(hombres, porcentaje, total) {
        this.lblHombres.innerHTML = hombres.toString();
        this.lblPorcentaje.innerHTML = porcentaje.toFixed(2) + "%";
        this.lblTotal.innerHTML = total.toString();
    }
    vincularEvento(manejador) {
        this.btnAgregar.onclick = manejador;
    }
}
