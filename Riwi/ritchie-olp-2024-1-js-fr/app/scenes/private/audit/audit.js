import "./audit.css";
import "../../../components/navigation-bar/navigation-bar";

export function AuditScene() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <navigation-bar id="navigation-bar"></navigation-bar> 
    <h2>Audit Trail</h2>
    <button id="home">New User</button>
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
        <section id="filter" style="display: none" >
        </section>
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


  const menus = document.querySelectorAll('a');
  const element = document.getElementById('filter');
  let aux2 = false;
  
  menus.forEach(menu => {
    menu.addEventListener('click', () => {
      if (aux) return;
      element.style.display = 'block';
      const form = `
      <form id="filterForm" class="filter-form">
        <label class="filter-label" for="filterType">Filter By:</label>
        <select class="filter-input" id="filterType" name="filterType">
          <option value="userId">User ID</option>
          <option value="date">Date</option>
          <option value="clan">Clan</option>
          <option value="role">Role</option>
        </select>

        <label class="filter-label" for="filterValue">Filter Value:</label>
        <input class="filter-input" type="text" id="filterValue" name="filterValue">

        <label class="filter-label" for="sortOrder">Sort Order:</label>
        <select class="filter-input" id="sortOrder" name="sortOrder">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button type="submit" class="filter-button">Filter</button>
        <button id="closeFormButton" class="filter-button">Close</button>
      </form>
    `;
      element.innerHTML += form;
      aux2 = true;
  
      const closeButton = document.getElementById('closeFormButton');
      closeButton.addEventListener('click', () => {
        aux2 = false;
        element.style.display = 'none';
      });
    });
  });
  


}



