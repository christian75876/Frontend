import "./new-useer.css";

export function NewUser() {
  root.addEventListener("click", () => {});
  contenedor();
}

const contenedor = () => {
  const newUser = document.createElement("div");
  newUser.innerHTML = `
    <div>Hola mundo</div>
`;
  console.log("hola");
};
