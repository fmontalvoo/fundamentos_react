// Reemplazar este codigo en index.js

// Los estados en React permiten actualizar componentes de la interfaz grafica. 

// Manejo de estados en un componente de clase.

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0 // Establecemos un valor por defecto al counter.
        }

        // Asigna un valor que no se modifique para el contexto.
        this.updateCounter = this.updateCounter.bind(this);
    }


    // updateCounter = () => {
    //     this.setState({ counter: this.state.counter + 1 });
    // }
    
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

ReactDOM.render(<Button />, document.getElementById("root"))