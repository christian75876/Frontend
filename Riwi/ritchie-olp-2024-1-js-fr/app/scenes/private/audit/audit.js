import "./audit.css";
import "../../../components/navigation-bar/navigation-bar";

export function AuditScene() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <navigation-bar id="navigation-bar"></navigation-bar> 
    <h2>Esta es pagina de auditoria</h2>
    <div id="table">
        <table>
            <thead>
              <tr>
								<th><a>Date and time<span class"icon">🔍</span></a></th>
                <th><a>User<span class"icon">🔍</span></a></th>
								<th><a>Roll<span class"icon">🔍</span></a></th>
								<th><a>Clan<span class"icon">🔍</span></a></th>
                <th><a>time this Logueo<span class"icon">🔍</span></a></th>
                <th><a>time this logouth<span class"icon">🔍</span></a></th>
                <th><a>Event<span class"icon">🔍</span></a></th>
              </tr>
            </thead>
        </table>
    </div>
    `;
}
