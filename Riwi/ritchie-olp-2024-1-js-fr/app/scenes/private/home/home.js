// import "./home.css";
import "../../../components/sidebar-menu/sidebar-menu"

export function HomeScene() {
  const root = document.getElementById("root");

  root.innerHTML = `
  <navigation-bar id="navigation-bar"></navigation-bar>
  <side-bar></side-bar>
  
    
  `;
}
