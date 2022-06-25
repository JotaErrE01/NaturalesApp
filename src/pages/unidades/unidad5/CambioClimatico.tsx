
export const CambioClimatico = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">El Cambio Climático</h1>

      <div className="w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <h2 className="text-2xl text-violet-500 font-semibold">El Clima Cambiante</h2>
            <p>
              El cambio climático que estamos experimentando, caracterizado por el aumento de la temperatura global y el descontrol en los periodos de lluvias y sequías, está relacionado con cambios en las dinámicas que generalmente tiene la atmósfera. Estas alteraciones se han agudizado gracias a que el equilibrio energético que existe entre loscomponentes del planeta ha sido afectado por transformaciones físicoquímicas derivadas de nuestras acciones; por ejemplo de la mayor emisión de dióxido de carbono que han llevado al desequilibrio energético responsable de tales cambios.
            </p>
          </div>

          <img
            className="w-4/5 lg:mt-0 lg:w-1/2 mx-auto rounded"
            src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/09/cambio-climatico.jpg"
            alt="Cambio Climatico" />
        </div>

        <h2 className="text-2xl text-violet-500 font-semibold mt-5">Los Combustibles Fósiles</h2>
        <p>
          El carbono que se encuentra en el carbón, el petróleo y el gas natural que estaba
          enterrado bajo tierra, aislado del ciclo del carbono, fue incorporado a este gracias a la acción de los seres humanos. Cuando usamos los combustibles fósiles estamos usando la energía solar que fue almacenada hace millones de años y, como consecuencia, estamos liberando el CO2 de entonces a nuestra atmósfera actual. Según pruebas científicas hechas a muestras prehistóricas de aire, se sabe que nuestra atmósfera actualmente tiene la cantidad más alta de CO2 registrada en los últimos 650 000 años, un 27 % más.
        </p>

        <h2 className="text-2xl text-violet-500 font-semibold mt-5">Los Gases del Efecto invernadero y el Calentamiento Global</h2>
        <p>
          Los gases de efecto invernadero actúan como un filtro en la atmósfera que deja
          entrar la energía solar, pero luego no la deja salir porque absorbe y retiene el calor en el que se ha transformado. Este fenómeno se conoce como efecto invernadero. El CO2, junto con otros gases como el óxido nitroso (N2O) y el metano (CH4), son gases invernadero liberados principalmente por:
        </p>
        <ul className="list-disc list-inside mb-5">
          <li className="mt-2 ml-2">Las actividades agrícolas</li>
          <li className="mt-2 ml-2">Los depósitos de basura</li>
          <li className="mt-2 ml-2">Los procesos de tratamiento de aguas residuales</li>
          <li className="mt-2 ml-2">La explotación del carbón</li>
          <li className="mt-2 ml-2">El uso de combustibles fósil</li>
        </ul>
      </div>
    </div>
  )
};
