import "./navigation-bar.css";
import { logOut } from "../../helpers/log-out";
import { navigateTo } from "../../Router";
import "../navigation-bar/navigation-bar";

if (!customElements.get("navigation-bar")) {
  class NavigationBar extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const nav = document.createElement("nav");
      nav.classList.add("nav");

      nav.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    :host {
      display: flex;
      align-items: center;
    }
    
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 17rem; 
      height: 100vh;
      background: rgb(125, 53, 192);
      font-weight: 900;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em;
    }
    
    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; /* Cambiado de align-content a align-items */
      gap: 4em;
      border-radius: 0 16px 16px 0;
    }
    
    .list_item {
      list-style: none;
      width: 100%;
      text-align: center;
      overflow: hidden;
      color: inherit;
      text-decoration: none;
      transition: all ease 1s;
      border-radius: 10px;
    }
    
    .list_item:hover{
      background: grey;
    }
    
    .list_item--click{
      cursor: pointer
    }
    
      </style>

        <ul class = "list">
        <li class="list_item nav_item"" id="home"><a href="#" class="list_item">🏠 Home</a></li>
        <li class="list_item nav_item"><a href="#" class="list_item">🎮 Juegos</a></li>
        <li class="list_item nav_item"><a href="#" class="list_item">🏆 Ligas</a></li>
        <li class="list_item nav_item"><a href="#" class="list_item">🏅 Desafíos</a></li>
         <li class = "list_item list_item--click">≡
            <ul>
                <li class="list_inside >
                    <a href="#">Estoy Dentro</a>
                </li>
                <li class="list_inside">
                    <a href="#">Estoy Dentro</a>
                </li>
                <li class="list_inside">
                <nav>
                <button id="logout">Logouts</button>
                <br>
                <button id="reports">Reportes</button>
                </nav>
                </li>
            </ul>
        </li>
    </ul>
       
        `;
      shadow.appendChild(nav);
      //Logout
      const logOuts = shadow.getElementById("logout");
      logOuts.addEventListener("click", () => logOut());
      //Reports
      const reportsButton = shadow.getElementById("reports");
      reportsButton.addEventListener("click", () =>
        navigateTo("/dashboard/audit")
      );
      // Home
      let Home = shadow.getElementById("home");
      Home.addEventListener("click", () => navigateTo("/dashboard"));
    }
  }

  customElements.define("navigation-bar", NavigationBar);
}
