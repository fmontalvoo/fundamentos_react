// Reemplazar este codigo en index.js

// Los estados en React permiten actualizar componentes de la interfaz grafica. 

function Button(){
    // useState retorna la variable counter con un valor de cero y la fucion setState para actualizar el componente.
    const [counter, setState] = React.useState(0); // Hook
    return (
        <div>
            <p>Contador: {counter}</p>
            <button onClick={() => setState(counter+1)}>+</button>
        </div>
    );
}

const App = () => <div><Button /></div>;

ReactDOM.render(<App />, document.getElementById("root"))