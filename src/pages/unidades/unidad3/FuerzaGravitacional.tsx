
export const FuerzaGravitacional = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">La Fuerza Gravitacional</h1>

      <div className="w-[95%] mx-auto">
        <p>
          La fuerza de atracción gravitacional es una fuerza de acción a distancia entre dos cuerpos, por ejemplo, la Tierra y los cuerpos que están sobre su superficie. La fuerza gravitacional es una cantidad vectorial y por lo tanto cuenta con dirección y magnitud; su unidad de medida es el Newton.
        </p>

        <p>
          La ley de Isaac Newton sobre la gravitación universal dice que toda partícula en el universo atrae a cualquier otra partícula con una fuerza que es proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia entre ellas. Esta fuerza actúa a lo largo de la línea que une a las dos partículas.
          La fuerza de atracción gravitacional también se evidencia en el movimiento de los planetas con respecto al Sol. Así, Marte, que se encuentra a una distancia del Sol menor que a la que se encuentra Neptuno, experimenta una mayor atracción por parte del Sol comparada con la que experimenta Neptuno: se cumple que a
          menor distancia de separación mayor es la fuerza de atracción entre los cuerpos.
        </p>

        <img
          className="lg:w-1/2 mx-auto mt-5 w-4/5 rounded-lg"
          src="/fuerzaGravitacional.png"
          alt="Fuerza Gravitacional"
        />
        
        <h2 className="mt-5 font-semibold text-violet-500 text-2xl">La Gravedad</h2>
        <p className="mb-5 mt-2">
          La aceleración que ocurre como consecuencia de la fuerza de gravedad que ejerce la Tierra sobre los cuerpos que están en su superficie se denomina aceleración de la gravedad g. La gravedad es el resultado de la atracción o interacción de la Tierra con cualquier cuerpo que se encuentre en su periferia. El valor de la gravedad es 9,8 m/s2, lo que indica que por cada segundo de tiempo la velocidad aumenta en 9,8 m/s, y su dirección es vertical hacia abajo (dirigida hacia el centro de la Tierra).
          Todos los cuerpos que se dejan caer en ausencia del aire caen a la superficie terrestre con la misma aceleración constante debido a la influencia de la gravedad; no obstante, el valor de la gravedad puede alterarse con la altitud, incluso en la misma Tierra. En general, el valor más alto de la gravedad está en los polos y su valor mínimo en la línea del ecuador.
        </p>
      </div>
    </div>
  )
};
