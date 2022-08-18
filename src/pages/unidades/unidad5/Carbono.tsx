
export const Carbono = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-2xl lg:text-5xl text-center text-violet-500 font-bold">El Elemento Carbono</h1>

      <div className="w-[95%] mx-auto mb-5">
        <h2 className="text-xl lg:text-2xl text-violet-500 font-bold">Propiedades del Carbono</h2>
        <p>
          El carbono es un elemento no metálico que se encuentra en forma sólida a temperatura ambiente. Se representa con el símbolo C, tiene una masa atómica de 12 y número atómico de 6, y presenta cuatro electrones de valencia.
          El carbono es el principal componente de la materia orgánica, forma parte de una variedad casi infinita de combinaciones, ya que presenta la capacidad de formar cadenas, anillos y compuestos ramificados estables. Según Hill y Kolb (1999), se calcula que existen alrededor de 15 millones de compuestos orgánicos.
        </p>


        <div className="flex gap-5 justify-evenly flex-col lg:flex-row mt-10">
        <img
          className="w-4/5 lg:w-[40%] mx-auto"
          src="/carbono.png"
          alt="Carbono"
        />

        <img
          className="w-4/5 lg:w-[40%] rounded mx-auto"
          src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/573c5c825cafe8750db29ce9/molecula-carbono.jpg"
          alt="Carbono"
        />
        </div>

        {/* <h2 className="mb-2 text-2xl text-violet-500 font-semibold mt-10">Alótropos del carbono</h2>

        <p>
          El carbono puede encontrarse en la naturaleza en distintas formas alótropicas, las cuales dependen de las condiciones de formación en la naturaleza. Los alótropos son formas de un mismo elemento que se diferencian en cómo sus átomos se unen entre sí, y en sus propiedades físicas y químicas.
          Las formas alotrópicas del carbono más comunes son el carbono amorfo o grafito, el carbono cristalino o diamante y el fulereno, conocido también como buckyball
        </p>

        <img
          className="w-4/5 mx-auto"
          src="/alotroposCarbono.png"
          alt="Alotropos del Carbono" 
        /> */}
      </div>
    </div>
  )
};
