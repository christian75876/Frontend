import "./user.css";
import { navigateTo } from "../../../Router";
import "../../../components/navigation-bar/navigation-bar";

export function User() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <navigation-bar></navigation-bar>
    
      
    `;

  const reportsButton = document.createElement("button");
  reportsButton.textContent = "Ver Reportes";
  reportsButton.id = "reports";
  reportsButton.addEventListener("click", () =>
    navigateTo("/dashboard/reports")
  );

  //
}
