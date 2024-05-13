import "./audit.css";
import "../../../components/navigation-bar/navigation-bar";

export function AuditScene(){
    const root = document.getElementById("root");

    root.innerHTML = `
    <navigation-bar id="navigation-bar"></navigation-bar>
    <h2>Esta es pagina de auditoria</h2>
    `
}