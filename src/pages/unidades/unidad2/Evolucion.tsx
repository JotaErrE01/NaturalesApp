
export const Evolucion = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">La Evolución</h1>

      <div className="w-[95%] mx-auto">
        <div
          className="flex flex-col"
        >
          <h2 className="mt-12 text-2xl lg:text-3xl text-violet-500 font-semibold">¿Qué es la evolución?</h2>
          <p className="mt-5">
            La evolución es un proceso de cambio a partir del cual se forman nuevas especies basadas en las preexistentes. Gracias a la evolución podemos entender el desarrollo de nuevas formas de vida que ha dado lugar a tan amplia diversidad; la razón por la que existen semejanzas y diferencias entre los seres que viven actualmente y los que ya desaparecieron, y las relaciones que presentan los organismos.
            La vida en la Tierra se remonta a hace 3 500 millones de años y durante todo este tiempo ha experimentado cambios continuos. La teoría de la evolución sostiene que los organismos sufren cambios biológicos a través de las generaciones.
            La evolución está sostenida por diferentes pruebas que se conocen como las evidencias de evolución, que se van a analizar a continuación.
          </p>
          <div
            className="flex mt-5 gap-5 flex-col lg:flex-row"
          >
            <img 
              className="lg:w-2/5"
              src="https://t2.ev.ltmcdn.com/es/posts/3/9/8/adaptacion_biologica_que_es_tipos_y_ejemplos_2893_600.jpg" 
              alt="La Evolucion" 
            />

            <div>
              <h3 className="text-xl text-violet-500 font-semibold" >Evidencias de la evolución</h3>
              <p className="mt-5">
                <span>Evidencias paleontológicas: los fósiles.</span>
                Los fósiles son restos de organismos que vivieron años atrás y evidencias de la acti- vidad de organismos del pasado. El registro fósil permite establecer y contrastar el orden cronológico de origen y extinción de los seres vivos. Es una de las mejores pruebas físicas que se tiene para establecer el tiempo en el que vivieron y las con- diciones del ambiente que habitaron. Los paleontólogos han permitido abrir una ventana al pasado con la recreación de estos ambientes o paleoambientes.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold text-violet-500 mt-5 mb-2">Tipos de Fósiles</h3>
            <p>De acuerdo con el tamaño de los fósiles, estos se clasifican en microfósiles, ma- crofósiles e icnofósiles.</p>
            <p>
              <span>• Microfósiles: </span>
              son visibles al microscopio óptico; por ejemplo, los restos o seña- les de la actividad de microorganismos como bacterias y protozoos.
            </p>
            <p>
              <span>• Macrofósiles o megafósiles: </span>
              aquellos que se ven a simple vista como dientes de animales, huesos, impresiones de plantas en rocas, insectos conservados en ámbar, entre otros.
            </p>
            <p>
              <span>• Icnofósiles: </span>
              son evidencias de la actividad de algún ser vivo, por ejemplo, restos de materia fecal o coprolitos, huellas, huevos, nidos y cualquier otro rastro de su presencia.
            </p>
          </div>

          <img 
            className="lg:w-1/2 mx-auto mb-5"
            src="/assets/tiposFosilizacion.png" 
            alt="Tipos de Fosilizacion" 
          />
        </div>
      </div>
    </div>
  )
};
