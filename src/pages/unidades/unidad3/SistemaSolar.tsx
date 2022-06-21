

export const SistemaSolar = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">Sistema Solar</h1>

      <div className="w-[95%] mx-auto">
        <div
          className="flex flex-col"
        >
          <h2 className="font-semibold text-violet-500 text-2xl mt-5 mb-2">Planetas y Satélites</h2>
          <p>
            Los planetas son ocho, partiendo desde el más cercano al Sol están: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Los cuatro más próximos al Sol son compactos, tienen superficies rocosas y se llaman planetas interiores. En tanto que los planetas exteriores son de mayor tamaño y están formados básicamente de gases.
            Los satélites son cuerpos que se mueven alrededor de los planetas, Mercurio y Venus no tienen satélites, la Tierra a la Luna y Marte tiene dos. Los otros planetas tienen varios satélites.
          </p>

          <h2 className="font-semibold text-violet-500 text-2xl mt-5 mb-2">Cuerpos Pequeños del Sistema Solar</h2>
          <img
            className="mx-auto mt-5 rounded-lg lg:w-4/5"
            src="/sistemaSolar.png"
            alt="Sistema Solar" 
          />
        </div>
      </div>
    </div>
  )
};
