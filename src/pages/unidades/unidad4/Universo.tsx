
export const Universo = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">El Universo</h1>

      <div
        className="w-[95%] mx-auto"
      >
        <div
          className="flex flex-col lg:flex-row gap-5"
        >
          <img
            className="w-4/5 rounded lg:w-2/5 mx-auto"
            src="https://www.eluniverso.com/resizer/z1n_W91enlyG_hfjVj9sbPRheQ8=/1139x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/EETIFOR2QBAILIR7LCCLPXZFVA.jpg"
            alt="El Universo"
          />

          <div>
            <h2 className="text-2xl text-violet-500 font-semibold mb-2">Las estrellas</h2>
            <p>
              Las estrellas maravillan a los seres humanos, pues ¿quién no se encanta con una noche estrellada? Probablemente las estrellas son las responsables de que la hu- manidad desde tiempos remotos haya tenido la necesidad de conocer y entender el universo.
              Las estrellas son esferas de gas caliente y brillante que producen su propia luz y energía mediante un proceso de fusión nuclear, la cual sucede cuando los ele- mentos livianos se juntan para convertirse en elementos más pesados, liberando calor y produciendo brillo.
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-violet-500 font-semibold mb-2 mt-5">Nacimiento de las estrellas</h2>
        <p>
          Las estrellas nacen en las nebulosas, que son nubes frías y grandes formadas por polvo y gases como hidrógeno y helio; elementos como nitrógeno, oxígeno y otros más pesados. Las nubes se contraen debido a la fuerza de gravedad entre sus partículas. Conforme va disminuyendo su tamaño se van rompiendo en pedazos más pequeños. En estos fragmentos ocurren reacciones nucleares que elevan la temperatura y aumentan la densidad, convirtiéndose en una estrella.
          El tiempo que demora una estrella en formarse depende de su masa, mientras más grande es la estrella más rápido es el proceso; sin embargo, hay que tomar en cuenta que la formación de estrellas ocurre entre 100 000 a 10 millones de años.
          Las estrellas tienen brillo debido a que ocurre de forma constante una reacción química que transforma el hidrógeno en helio, lo cual libera energía. Las estrellas de menor masa queman su hidrógeno poco a poco; en cambio, las estrellas gran- des, llamadas también masivas, agotan su combustible rápidamente.
          El Sol es una estrella que se estima tendrá una vida de 10 000 millones de años; su edad actual es de 5 000 millones de años, por lo que se calcula que está en la mitad de su vida.
        </p>

        <img
          className="w-4/5 lg:w-1/2 mx-auto mt-5 rounded"
          src="/evolucionEstelar.png"
          alt="Evolucion Estelar" 
        />
      </div>
    </div>
  )
};
