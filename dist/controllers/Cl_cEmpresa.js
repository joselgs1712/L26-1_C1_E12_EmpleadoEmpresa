import cl_empresa from "../models/Cl_mEmpresa.js";
import v_empresa from "../views/Cl_vEmpresa.js";
import v_empleado from "../views/Cl_vEmpleado.js";
import c_empleado from "../controllers/Cl_cEmpleado.js";
export default class c_empresa {
    modelo;
    vista;
    cEmpleado;
    constructor(m, v, vEmple) {
        this.modelo = m;
        this.vista = v;
        this.cEmpleado = new c_empleado(vEmple);
        this.vista.vincularEvento(() => this.procesar());
    }
    procesar() {
        let empleado = this.cEmpleado.crearEmpleado();
        if (empleado.nombre.trim() === "") {
            alert("Ingrese un nombre válido");
            return;
        }
        this.modelo.procesarEmpleado(empleado);
        this.vista.reportarEmpresa(this.modelo.cantidadHombres(), this.modelo.porcentajeMujeres());
    }
}
// ARRANQUE AUTOMÁTICO (Sin archivo principal separado)
const mEmpresa = new cl_empresa();
const vEmpresa = new v_empresa();
const vEmpleado = new v_empleado();
new c_empresa(mEmpresa, vEmpresa, vEmpleado);
