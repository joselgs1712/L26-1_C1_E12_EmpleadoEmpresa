export default class v_empleado {
  leerNombre(): string {
    return (document.getElementById("nombre") as HTMLInputElement).value;
  }
  leerSexo(): string {
    return (document.getElementById("sexo") as HTMLSelectElement).value;
  }
}