
export const FuerzaGravitacional = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">La Fuerza Gravitacional</h1>

      <div className="w-[95%] mx-auto">
        <p>
          La fuerza de atracción gravitacional es una fuerza de acción a distancia entre dos cuerpos, por ejemplo, la Tierra y los cuerpos que están sobre su superficie. La fuerza gravitacional es una cantidad vectorial y por lo tanto cuenta con dirección y magnitud; su unidad de medida es el Newton.
        </p>

        <div className="flex mt-5 lg:flex-row flex-col gap-5">
          <img
            className="lg:w-1/2 mx-auto w-4/5 rounded-lg"
            src="/fuerzaGravitacional.png"
            alt="Fuerza Gravitacional"
          />
          <img
            className="lg:w-[40%] mx-auto w-4/5 rounded-lg"
            src="https://concepto.de/wp-content/uploads/2018/09/fuerza-de-gravedad1-e1537907491241.jpg"
            alt="Fuerza Gravitacional"
          />
        </div>

        <h2 className="mt-5 font-semibold text-violet-500 text-2xl">La Gravedad</h2>
        <p className="mb-5 mt-2">
          La gravedad es el resultado de la atracción o interacción de la Tierra con cualquier cuerpo que se encuentre en su periferia. El valor de la gravedad es 9,8 m/s2, lo que indica que por cada segundo de tiempo la velocidad aumenta en 9,8 m/s, y su dirección es vertical hacia abajo (dirigida hacia el centro de la Tierra).
          En general, el valor más alto de la gravedad está en los polos y su valor mínimo en la línea del ecuador.
        </p>
      </div>
    </div>
  )
};
