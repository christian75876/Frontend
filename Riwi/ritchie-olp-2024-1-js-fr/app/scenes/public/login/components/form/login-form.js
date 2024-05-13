import { navigateTo } from "../../../../../Router.js";
import { formValidator } from "../../../../../helpers";
import "./login-form.css";

export async function LoginFormComponent() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <form id="loginForm">
      <div id="login">
        <h2>Login</h2>
      </div>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" autocomplete="email">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" autocomplete="current-password">
        <button type="submit">Login</button>
    </form>
    <div class="container">
          <div class="shade"></div>
          <div class="shade shade2"></div>
    </div>
    `;

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!formValidator(email, password)) {
      alert("Please fill in all fields");
      return;
    }
    const token = await login(email, password);
    if (token) {
      localStorage.setItem("token", token);
      navigateTo("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  });
}

async function login(email, password) {
  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}
