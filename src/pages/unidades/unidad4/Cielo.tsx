
export const Cielo = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">El Cielo</h1>

      <div className="w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <h2 className="mb-2 text-2xl text-violet-500 font-semibold">Estrellas fugaces</h2>
            <p>
              Los meteroides son cuerpos formados de partículas de polvo, hielo o rocas que se encuentran en el espacio y son producto de la formación de planetas, estrellas y otros cuerpos o que quedan del paso de los cometas.
              Cuando los meteroides ingresan a nuestra atmósfera se queman y producen un fenómeno luminoso llamado meteoro o estrella fugaz.
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
        </p>
        <img
          className="lg:w-1/2 mx-auto mt-5 rounded h-[14rem] object-contain"
          src="/lluviaMeteoros.png"
          alt="Lluvia de meteoros"
        />
      </div>
    </div>
  )
};
