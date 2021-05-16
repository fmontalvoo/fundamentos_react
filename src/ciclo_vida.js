// Reemplazar este codigo en index.js

function Button() {

    // Se ejecuta unicamente al iniciar el componente.
    React.useEffect(() => console.log("Inicializacion del componente"), []);

    // Se ejecuta cada vez que se actualiza el componente.
    React.useEffect(() => console.log(`Acualizacion del componente | contador: ${counter}`));

    // Se ejecuta unicamente cuando el componente es eliminado.
    React.useEffect(() => { return () => console.log("Eliminacion del componente"); }, []);

    const [counter, setState] = React.useState(0); // Hook

    return (
        <div>
            <p>Contador: {counter}</p>
            <button onClick={() => setState(counter + 1)}>+</button>
        </div>
    );
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