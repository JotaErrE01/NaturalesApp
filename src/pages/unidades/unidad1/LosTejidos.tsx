
export const LosTejidos = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">Los Tejidos</h1>

      <div className="w-[95%] mx-auto mb-10">
        <div
          className="flex flex-col"
        >
          <p className="mt-5 order-2 lg:order-none">
            Los tejidos constituyen el siguiente nivel de organización y están formados por la unión de células similares, que tienen un origen embrionario común y que cumplen con una función específica. Los tejidos están formados por células unidas entre sí y una sustancia o matriz extracelular que es sintetizada por las mismas células. La matriz extracelular está formada por agua, minerales y proteínas, cumple con algunas funciones como permitir que las células se mantengan juntas y no pierdan la forma, permite el movi- miento del tejido y genera canales de comunicación.
          </p>

          <img
            className="lg:w-1/2 mx-auto mt-5 w-4/5 rounded-lg"
            src="/organizacionBiologica.png"
            alt="Niveles de Organización Bilógica"
          />
        </div>
      </div>
    </div>
  )
};
