import styles from "./user.css";
import { navigateTo } from "../../../Router";
import "../../../components/navigation-bar/navigation-bar";

export function User() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <navigation-bar></navigation-bar>
    <h2>Usuarios</h2>
    <button id="home">New User</button>
    <div id="contenedor">
      <table>
        <thead>
          <tr id="head">
            <th>Name</th>
            <th>User Name</th>
            <th>Password</th>
          </tr>
        </thead>
      </table>
    <section id="messageSection" style="display: none;">
      <p id="message"></p>
    </section>
    </div>
    
    
      
    `;

  const reportsButton = document.createElement("button");
  reportsButton.textContent = "Ver Reportes";
  reportsButton.id = "reports";
  reportsButton.addEventListener("click", () =>
    navigateTo("/dashboard/reports")
  );

  let aux = false;

  const btn = document.querySelector('button');
  const messageSection = document.getElementById('messageSection');
  const messageParagraph = document.getElementById('message');

  btn.addEventListener('click', () => {
    // Mostrar el formulario
    if (aux) return;
    messageParagraph.textContent = null;
    messageSection.style.display = 'block';

    const messageHTML = `
      <form id="userForm">
        <label class="labelUser" for="firstName">Nombre:</label>
        <input class="inputUser" type="text" id="firstName" name="firstName" required>

        <label class="labelUser" for="username">Usuario:</label>
        <input class="inputUser" type="text" id="username" name="username" required>

        <label class="labelUser" for="phone">Teléfono:</label>
        <input class="inputUser" type="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>

        <label class="labelUser" for="clan">Clan:</label>
        <input class="inputUser" type="text" id="clan" name="clan" required>

        <label class="labelUser" for="password">Contraseña:</label>
        <input class="inputUser" type="password" id="password" name="password" required>

        <label class="labelUser" for="confirmPassword">Confirmar Contraseña:</label>
        <input class="inputUser" type="password" id="confirmPassword" name="confirmPassword" required>

        <button type="submit">Crear Usuario</button>
        <button id="closeMessage">Cerrar</button>
      </form>
      
      `;

    messageParagraph.innerHTML += messageHTML;
    aux = true;

    // Agregar un evento para cerrar el mensaje
    const closeButton = document.getElementById('closeMessage');
    closeButton.addEventListener('click', () => {
      // Retornar a falso para que se pueda acceder nuevamente
      aux = false;

      messageSection.style.display = 'none';
    });
  });

}
