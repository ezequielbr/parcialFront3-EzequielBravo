import { useState } from "react";
import "./styles/App.css";
import Card from "./components/Card";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    peliculaFavorita: "",
    actorFavorito: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.length > 2 && usuario.peliculaFavorita.length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };
  return (
    <>
      <h1>Carga de usuarios</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Nombre</label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value.trim() })
          }
        />
        <label>Pelicula favorita</label>
        <input
          type="text"
          value={usuario.peliculaFavorita}
          onChange={(event) =>
            setUsuario({ ...usuario, peliculaFavorita: event.target.value })
          }
        />
        <label>Actor favorito</label>
        <input
          type="text"
          value={usuario.actorFavorito}
          onChange={(event) =>
            setUsuario({ ...usuario, actorFavorito: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>
      {show && <Card usuario={usuario} />}
      {error && (
        <h5 style={{ color: "red" }}>
          Por favor verifique los datos antes de enviar
        </h5>
      )}
    </>
  );
}

export default App;
