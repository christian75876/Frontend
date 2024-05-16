// import "./reports.css";
import { navigateTo } from "../../../Router";
import "../../../components/navigation-bar/navigation-bar";

export function ReportScene() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <navigation-bar></navigation-bar>
    <div class="contenedor">
  <h1>Reportes</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque consequuntur facilis est, dolorem sed optio, id esse veniam explicabo eum dolorum. Harum excepturi beatae voluptate explicabo nihil illo cum?</p>
  </div>
      
    `;

  const reportsButton = document.createElement("button");
  reportsButton.textContent = "Ver Reportes";
  reportsButton.id = "reports";
  reportsButton.addEventListener("click", () =>
    navigateTo("/dashboard/reports")
  );

  //
}
