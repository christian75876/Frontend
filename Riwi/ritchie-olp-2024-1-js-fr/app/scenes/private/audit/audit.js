import "./audit.css";
import "../../../components/navigation-bar/navigation-bar";

export function AuditScene(){
    const root = document.getElementById("root");

    root.innerHTML = `
    <navigation-bar id="navigation-bar"></navigation-bar> 
    <h2>Esta es pagina de auditoria</h2>
    <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Hora de Logueo</th>
            <th>Hora de Deslogueo</th>
            <th>Eventos</th>
          </tr>
        </thead>
    </table>
    `
}