export default class cl_empresa {
    cntHombres;
    cntMujeres;
    constructor() {
        this.cntHombres = 0;
        this.cntMujeres = 0;
    }
    procesarEmpleado(e) {
        if (e.sexo === "M")
            this.cntHombres++;
        else if (e.sexo === "F")
            this.cntMujeres++;
    }
    cantidadHombres() { return this.cntHombres; }
    porcentajeMujeres() {
        let total = this.cntHombres + this.cntMujeres;
        return total > 0 ? (this.cntMujeres / total) * 100 : 0;
    }
}
