export default class cl_empresa {
    cntHombres;
    cntMujeres;
    cntPasos;
    constructor() {
        this.cntHombres = 0;
        this.cntMujeres = 0;
        this.cntPasos = 0;
    }
    procesarEmpleado(e) {
        this.cntPasos++;
        if (e.sexo === "M")
            this.cntHombres++;
        else if (e.sexo === "F")
            this.cntMujeres++;
    }
    cantidadHombres() { return this.cntHombres; }
    cantidadTotal() {
        return this.cntPasos;
    }
    porcentajeMujeres() {
        let total = this.cntHombres + this.cntMujeres;
        return total > 0 ? (this.cntMujeres / total) * 100 : 0;
    }
}
