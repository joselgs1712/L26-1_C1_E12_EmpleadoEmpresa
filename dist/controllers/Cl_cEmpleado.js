import cl_empleado from "../models/Cl_mEmpleado.js";
export default class c_empleado {
    vEmpleado;
    constructor(vEmple) {
        this.vEmpleado = vEmple;
    }
    crearEmpleado() {
        return new cl_empleado(this.vEmpleado.leerNombre(), this.vEmpleado.leerSexo());
    }
}
