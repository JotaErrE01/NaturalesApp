
export const Bacterias = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">Las Bacterias</h1>

      <div className="w-[95%] mx-auto">
        <div
          className="flex flex-col lg:flex-row gap-5"
        >
          <div>
            <p>
              Las bacterias habitan en casi todos los lugares del planeta. Viven en nuestro intestino y en el de otros animales y colaboran en el proceso de digestión, y habitan en los ecosistemas y cumplen un papel muy importante como descomponedoras de materia orgánica, lo que contribuye al reciclado de nutrientes. Están en el suelo, el agua y el aire, en todas las cosas que tocamos y el cuerpo de casi todos los seres vivientes.
            </p>
            <h2 className="text-violet-500 font-semibold text-xl mt-5">Estructura</h2>
            <p>
              La célula bacteriana es una célula procariota, pues no tiene núcleo ni organelos rodeados de membranas. El material genético se encuentra disperso en el citoplasma, está rodeada de una pared celular y algunas tienen una envoltura más externa llamada cápsula. Muchas bacterias constan de uno o muchos flagelos que la ayudan en su movimiento.
            </p>
          </div>

          <img
            className="lg:w-2/5 mx-auto w-4/5 lg:mt-0"
            src="/bacteria.png"
            alt="Estructura Bacteriana"
          />
        </div>

        <div>
          <h2 className="text-violet-500 font-semibold text-xl mt-5">Reproducción</h2>
          <p className="mt-2">
            Las bacterias se reproducen por medio de fisión binaria. Este proceso consiste en una duplicación del ADN antes de la división, luego de lo cual la célula se divide en dos; las células hijas son iguales a la bacteria original.
            Cuando las condiciones ambientales son desfavorables para las bacterias, algunas de ellas tienen la capacidad de volverse inactivas y formar una cubierta dura llamada endospora. Las endosporas son muy resistentes a la congelación, la desecación, el calor y la radiación; cuando las condiciones mejoran la bacteria vuelve a su actividad.
          </p>

          <h2 className="text-violet-500 font-semibold text-xl mt-5">Clasificación de las bacterias según su forma</h2>

          <img 
            className="mt-2 mb-5"
            src="/clasificacionBacterias.png" 
            alt="Clasificación de las bacterias segun su forma" 
          />
        </div>
      </div>
    </div>
  )
};
