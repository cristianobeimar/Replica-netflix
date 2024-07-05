import Sesiones from "./components/Sesiones/Sesiones";
import Cabecera from "./components/header/cabecera";
import categorias from "./components/header/imagenes/pelis";
function App() {
  return (
    <>
      <Cabecera />
      <section className="style-div">
        {categorias.map((items, indexa) => (
          <div className="priemer_div" key={indexa}>
            {items.map((item, index) => (
              <>
                <h1>{item.categoria}</h1>
                <div className="segundo_div" key={index}>
                  <div className="tercer_div">
                    {item.peliculas.map((e) => (
                      <div className="{style.div}" key={e.id}>
                        <Sesiones url={e.url} name={e.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
