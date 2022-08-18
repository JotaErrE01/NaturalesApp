

export const EstructuraTrofica = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl md:text-5xl text-center text-violet-500 font-bold">Estructura Trófica</h1>

      <div className="w-[95%] mx-auto mb-5">
        <div
          className="md:flex"
        >
          <img
            className="mb-5 md:mb-0 md:w-1/2"
            src="https://www.renovablesverdes.com/wp-content/uploads/2020/11/cadena-trofica-terrestre.jpg"
            alt="Estructura Trófica"
          />

          <div>
            <p>
              Los organismos que habitan en los ecosistemas establecen relaciones alimentarias o tróficas que hacen posible el flujo de materia y energía. Por ejemplo, carnívoros como la serpiente pueden comer herbívoros como los conejos, y estos, a su vez, alimentarse de zanahorias y plantas que hacen fotosíntesis.
            </p>

            <p className="mt-5">El nivel trófico de un organismo es la posición que ocupa en la cadena alimenticia.</p>
            <ul>
              <li className="block mt-2"><span>Cuarto nivel trófico:</span> consumidores terciarios, se encuentran en este nivel trófico los organismos que se alimentan de consumidores secundarios.</li>
              <li className="block mt-2"><span>Tercer nivel trófico:</span>consumidores secundarios, son los organismos que se alimentan de consumidores primarios, son heterótrofos y carnívoros.</li>
              <li className="block mt-2"><span>Segundo nivel trófico:</span> consumidores primarios, pertenecen a este nivel los organismos que se alimentan de los productores, se caracterizan por ser heterótrofos y herbívoros.</li>
              <li className="block mt-2"><span>Primer nivel trófico:</span> productores, corresponde a los organismos autótrofos que son aquellos que producen su propia materia orgánica o alimentos mediante la fotosíntesis. Entre estos se consideran a las plantas y algas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
