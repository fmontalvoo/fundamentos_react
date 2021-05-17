// Reemplazar este codigo en index.js

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0 // Establecemos un valor por defecto al counter.
        }

        // Asigna un valor que no se modifique para el contexto.
        this.updateCounter = this.updateCounter.bind(this);

    }

    // Se ejecuta unicamente al iniciar el componente.
    componentDidMount() {
        console.log("Inicializacion del componente");
    }

    // Se ejecuta cada vez que se actualiza el componente.
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevState, this.state, snapshot);
        console.log(`Acualizacion del componente | contador: ${this.state.counter}`);
    }

    // Se ejecuta unicamente cuando el componente es eliminado.
    componentWillUnmount() {
        console.log("Eliminacion del componente");
    }

    // Se ejecuta antes de actualizar el DOM.
    getSnapshotBeforeUpdate() {
        console.log("Antes de actualizar el DOM");
        return "Se actualizo el DOM.";
    }

    updateCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div>
                <p>Contador: {this.state.counter}</p>
                <button onClick={this.updateCounter}>+</button>
            </div>
        );
    }
}

const App = () => {
    const [showButton, setState] = React.useState(true);
    return (
        <div>
            <button onClick={() => setState(false)} >Eliminar boton +</button>
            <div>
                {showButton && <Button />}
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"))