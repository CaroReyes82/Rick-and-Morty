let llamadoPersonajes = (() => {
  const urlAPI = "https://rickandmortyapi.com/api/character/";
  const resultados = document.querySelector(".resultados");
  let datosPersonajes;

  let obtenerPersonajes = async () => {
    try {
      let respuesta = await fetch(urlAPI);
      let datos = await respuesta.json();
      datosPersonajes = datos;
      let spinner = document.getElementById("spinner");
      

      return datos;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    mostrar: async () => {
      const personajes = await obtenerPersonajes();
      const respuestaPersonajes = await personajes.results;
      respuestaPersonajes.forEach((p) => {
        resultados.innerHTML += `
               <div class="my-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
               <img src=${p.image} />
               </div> 
                <div >
                      <ul>
                        <li>
                          <span>${p.id}</span>
                        </li>
                        <li>
                          <span>${p.species}</span>
                        </li>
                      </ul>
                  </div>`;
      });
    },
  };
})();

llamadoPersonajes.mostrar();
