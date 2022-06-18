
export const Cielo = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">El Cielo</h1>

      <div className="w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h2 className="mb-2 text-2xl text-violet-500 font-semibold">Estrellas fugaces</h2>
            <p>
              Los meteroides son cuerpos formados de partículas de polvo, hielo o rocas que se encuentran en el espacio y son producto de la formación de planetas, estrellas y otros cuerpos o que quedan del paso de los cometas.
              Cuando los meteroides ingresan a nuestra atmósfera se queman y producen un fenómeno luminoso llamado meteoro o estrella fugaz.
              Se podría definir a las estrellas fugaces como trozos de polvo o roca que ingresa a la atmósfera de la Tierra y se queman antes de tocar la superficie.
              El ingreso del meteroide en la atmósfera de la Tierra produce un fenómeno de ionización que es observado como una línea luminosa. Los meteroides tienen el tamaño de granos de arena y se desintegran a una altitud de 80 a 100 km de altitud.
              Se llaman estrellas fugaces porque se mueven tan rápido y brillan mientras atraviesan una porción del cielo. Los meteoros o estrellas fugaces se desintegran antes de llegar a la superficie de la Tierra.
              Si los meteoros son grandes y llegan a la superficie de la Tierra sin consumirse totalmente se denominan meteoritos.
            </p>
          </div>

          <img
            className="lg:w-2/5 rounded"
            src="https://1.bp.blogspot.com/-3MveeefNJMs/Vi-2lsU4VeI/AAAAAAAAA-c/S1Kn7Vh3IoY/s640/Cometa_Ison_lluvia_de_meteoros.jpg"
            alt="Estrellas fugaces"
          />
        </div>

        <h2 className="mb-2 text-2xl text-violet-500 font-semibold mt-10">Lluvia de Meteoritos</h2>
        <p>
          En diferentes épocas del año se pueden observar a simple vista numerosas estre- llas fugaces que brillan durante la noche. Esto ocurre cuando la Tierra encuentra muchos meteroides al mismo tiempo y genera una lluvia de meteoritos.
          Los cometas se mueven alrededor del Sol y forman unas corrientes de meteroides que cruzan en periodos cortos de tiempo la órbita de la Tierra y esto produce una lluvia de meteoritos. Las Perseidas y Las Leónidas, que ocurren en los meses de agosto y noviembre respectivamente, son un ejemplo.
        </p>
        <img
          className="lg:w-1/2 mx-auto mt-5 rounded"
          src="/assets/lluviaMeteoros.png"
          alt="Lluvia de meteoros"
        />
      </div>
    </div>
  )
};
