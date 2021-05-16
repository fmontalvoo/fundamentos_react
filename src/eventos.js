// Reemplazar este codigo en index.js

const Saludo = () => {
    const [nombre, setState] = React.useState("");

    return (
        <div>
            {
                /* 
                SyntheticEvent: Evento que retorna React sobre los cambios que 
                suceden en el componente.
                */
            }
            <input type="text" onChange={(e) => setState(e.target.value)} />
            <p>Hola <span>{nombre}</span></p>
        </div>
    );
}

const App = () => <div><Saludo /></div>;

ReactDOM.render(<App />, document.getElementById("root"))