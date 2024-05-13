import "./home.css";
import "../../../components/navigation-bar/navigation-bar";

export function HomeScene() {
  const root = document.getElementById("root");

  root.innerHTML = `
  <navigation-bar id="navigation-bar"></navigation-bar>
  
    
  `;
}
