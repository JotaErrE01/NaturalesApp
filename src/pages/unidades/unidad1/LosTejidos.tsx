
export const LosTejidos = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">Los Tejidos</h1>

      <div className="w-[95%] mx-auto mb-10">
        <div
          className="flex flex-col"
        >
          <p className="mt-5 order-2 lg:order-none">
            Los tejidos constituyen el siguiente nivel de organización y están formados por la unión de células similares, que tienen un origen embrionario común y que cumplen con una función específica. Los tejidos están formados por células unidas entre sí y una sustancia o matriz extracelular que es sintetizada por las mismas células. La matriz extracelular está formada por agua, minerales y proteínas, cumple con algunas funciones como permitir que las células se mantengan juntas y no pierdan la forma, permite el movi- miento del tejido y genera canales de comunicación. La cantidad de matriz extracelular en cada tejido es diferen- te; así, los tejidos epitelial y nervioso tienen muy poca matriz extracelular, mientras en el tejido óseo esta es muy abundante.
            Muchos autores consideran que en los tejidos vegetales la pared celular es una matriz extracelular especializada, con características muy diferentes a la de los tejidos animales. Su función es dar rigidez a las células y funcionar como una barrera de protección.
            En las plantas vasculares y de semillas se distinguen cuatro tipos de tejidos vegetales, y en los mamíferos, a pesar de su complejidad, se encuentran tam- bién cuatro tipos de tejidos animales.
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
