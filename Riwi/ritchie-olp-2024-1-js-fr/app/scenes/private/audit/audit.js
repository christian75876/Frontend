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
								<th><a>Date and time</a></th>
                <th><a>User</a></th>
								<th><a>Roll</a></th>
								<th><a>Clan</a></th>
                <th><a>time this Logueo</a></th>
                <th><a>time this logouth</a></th>
                <th><a>Event</a></th>
              </tr>
            </thead>
        </table>
    </div>
    `;
}
