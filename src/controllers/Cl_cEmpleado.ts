import cl_empleado from "../models/Cl_mEmpleado.js";
import v_empleado from "../views/Cl_vEmpleado.js";

export default class c_empleado {
  private vEmpleado: v_empleado;

  constructor(vEmple: v_empleado) {
    this.vEmpleado = vEmple;
  }

  crearEmpleado(): cl_empleado {
    return new cl_empleado(this.vEmpleado.leerNombre(), this.vEmpleado.leerSexo());
  }
}