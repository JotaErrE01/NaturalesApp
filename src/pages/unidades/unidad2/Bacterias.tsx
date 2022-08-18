
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
          </div>
        </div>
        <img
            className="lg:w-2/5 mx-auto w-4/5 mt-5 rounded-2xl"
            src="/bacteria.png"
            alt="Estructura Bacteriana"
          />
        <div>
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
