import "./audit.css";
import "../../../components/navigation-bar/navigation-bar";

export function AuditScene() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <navigation-bar id="navigation-bar"></navigation-bar> 
    <h2>Esta es pagina de auditoria</h2>
    <button id="home">Prueba</button>
    <div id="table">
        <table>
            <thead>
              <tr id="head">
								<th><a>Date and time<span class"icon">🔍</span></a></th>
                <th><a>User<span class"icon">🔍</span></a></th>
								<th><a>Roll<span class"icon">🔍</span></a></th>
								<th><a>Clan<span class"icon">🔍</span></a></th>
                <th><a>time this Logueo<span class"icon">🔍</span></a></th>
                <th><a>time this logouth<span class"icon">🔍</span></a></th>
                <th><a>Event<span class"icon">🔍</span></a></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hola</td>
                <td>hola</td>
                <td>hola</td>
                <td>hola</td>
                <td>hola</td>
                <td>hola</td>
                <td>hola</td>
              </tr>
            </tbody>
        </table>
        <section id="messageSection" style="display: none;">
      <p id="message"></p>
    </section>
    </div>
    `;

  let aux = false;

  const btn = document.querySelector('button');
  const messageSection = document.getElementById('messageSection');
  const messageParagraph = document.getElementById('message');

  btn.addEventListener('click', () => {
    // Mostrar el mensaje
    if (aux) return;
    messageParagraph.textContent = null;
    messageSection.style.display = 'block';

    // Lógica adicional
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
      // Ocultar el mensaje al hacer clic en el botón de cerrar
      aux = false;

      messageSection.style.display = 'none';
    });
  });


}
