// Reemplazar este codigo en index.js

// Los props son argumentos que se pueden pasar a un componente.
// const App = (props) => <h1>¡Hola {props.nombre}!</h1>;

// Tambien se pueden asignar valores por defecto a los parametros de un componente.
const App = ({ nombre, idioma = 'en' }) => <h1>¡{idioma === "es" ? "Hola" : "Hello"} {nombre}!</h1>;

// Asigna un valor por defecto a la propiedad idioma.
App.defaultProps = {idioma: "es"}

ReactDOM.render(<App nombre="Frank" idioma="en" />, document.getElementById("root"))