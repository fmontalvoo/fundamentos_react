// Reemplazar este codigo en index.js

// Componente que renderiza el formulario.
const Form = () => {

    // Variables para manejar el estado del formulario.
    const [form, setState] = React.useState({ title: '', body: '' })

    // Esta funciop es llamada al enviar el formulario.
    const submitForm = (evt) => {
        evt.preventDefault() // Evita que se refresque la pantalla.

        // Peticion Post a un API Rest con los datos obtenidos del formulario.
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: form.title,
                body: form.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setState({ title: '', body: '' });
                console.log(json);
            });

    }

    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="title">Titulo: </label>
                <input id="title" type="text" value={form.title}
                    onChange={evt => setState({ title: evt.target.value, body: form.body })} />
            </div>
            <br />
            <div>
                <label htmlFor="body">Contenido: </label>
                <textarea id="body" type="text" value={form.body}
                    onChange={evt => setState({ title: form.title, body: evt.target.value })} />
            </div>
            <br />
            <input type="submit" value="Enviar" />
        </form>
    );
}


const App = () => <div><Form /></div>;

ReactDOM.render(<App />, document.getElementById("root"))