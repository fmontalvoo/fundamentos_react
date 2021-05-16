// Reemplazar este codigo en index.js

const lenguajes = [
    "Javascript",
    "Dart",
    "Python",
    "Typescript",
    "Java"
]

const Lenguajes = () => <ul>{
    lenguajes.map(
        (lenguaje, index) => <li key={index}> {lenguaje} </li>
    )
     }</ul>;

const App = () => <div><Lenguajes /></div>;

ReactDOM.render(<App />, document.getElementById("root"))
