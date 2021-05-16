// Reemplazar este codigo en index.js

class App extends React.Component {
    // Asigna un valor por defecto a la propiedad idioma.
    static defaultProps = {
        idioma: "es"
    }

    // Valida el tipo de datos que se puede asignar a un prop.
    // Es necesario instalar el paquete prop-types.
    static propTypes = {
        nombre: PropTypes.string,
        idioma: PropTypes.string
    }

    render() {
        const { idioma, nombre } = this.props
        return <h1>¡{idioma === "es" ? "Hola" : "Hello"} {nombre}!</h1>;
    }
}

ReactDOM.render(<App nombre="Frank" idioma="en" />, document.getElementById("root"))