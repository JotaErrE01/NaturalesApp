
export const Biodiversidad = () => {
  return (
    <div className="w-full">
      <h1 className="mt-12 w-[95%] text-2xl md:text-3xl lg:text-5xl text-center text-violet-500 font-bold">La Biodiversidad en Ecuador</h1>

      <div className="mx-auto w-[95%]">
        <h2 className="font-semibold text-xl lg:text-2xl text-violet-500">Regiones naturales de Ecuador</h2>

        <p>
          Ecuador cuenta con cuatro regiones, en las cuales se encuentra variedad de climas, vegetación, fauna y ecosistemas.
        </p>

        <h2 className="font-semibold text-xl lg:text-2xl text-violet-500 mt-5">Región Insular</h2>
        <p>
          Se refiere al archipiélago de Galápagos, que está ubicado 1 000 km del Ecuador continental, en el océano Pacífico; tiene 13 islas grandes, 6 islas pequeñas, 47 islotes y al menos 26 rocas de origen volcánico. Cuenta con una variedad de ecosistemas mixtos terrestres y marinos que están interrelacionados. El ecosistema representativo es Galápagos terrestre.
        </p>
        <img
          className="w-4/5 mt-5 h-60 object-contain rounded mx-auto"
          src="https://sites.google.com/site/miecuadorxmv/_/rsrc/1527439931862/region-insular/11-02-2015-galapagos-collage.jpg"
          alt="Region Insular"
        />

        <h2 className="font-semibold text-xl lg:text-2xl text-violet-500 mt-10">Región Sierra</h2>
        <p>
          Ubicada entre los dos ramales de la cordillera de los Andes, que están separados por menos de 200 km, entre los dos hay varios volcanes y montañas que forman valles interandinos. Se extiende de norte a sur, su altitud va disminuyendo hacia el sur y cuenta con tierras bajas hasta nieves eternas. Los ecosistemas que se encuentran en esta región son páramos, bosques montanos, y bosques secos y semiáridos.
        </p>
        <img
          className="w-1/2 mt-5 object-cover rounded mx-auto"
          src="http://1.bp.blogspot.com/-hnIOSu4jnH8/VNq9282xLdI/AAAAAAAAADw/eRRd_qvMSrs/s1600/turis%C3%A7.jpg"
          alt="Region Insular"
        />

        <h2 className="font-semibold text-xl lg:text-2xl text-violet-500 mt-10">Región Litoral</h2>
        <p>
          Está ubicada entre el océano Pacifico y la cordillera de los Andes. Incluye las cordilleras costeras, los ambientes terrestres y los lugares marinos. Los ecosistemas que se encuentran en esta región son los siguientes: oceánico, franja marino-costera, manglares, bosques húmedos del Chocó, y bosques secos y semiáridos.
        </p>
        <img
          className="rounded mx-auto w-1/2"
          src="https://www.ec.viajandox.com/uploads/Costa_1.jpg"
          alt="Litoral" 
        />

        <h2 className="font-semibold text-xl lg:text-2xl text-violet-500 mt-10">Región Amazónica</h2>
        <p>
          Está ubicada al oriente de la cordillera de los Andes, representa el 30 % del territorio nacional y apenas el 1,6 % de toda la selva amazónica que es compartida con varios países sudamericanos. Es la región con la mayor diversidad de plantas y animales. Tiene zonas con altitudes de 300 m hasta cordilleras que pueden elevarse hasta 3 100 m. Esta región cuenta con dos tipos de ecosistemas: bosques de tierra firme, y bosques inundados e inundables.
        </p>

        <img
          className="rounded w-1/2 mx-auto mb-10"
          src="http://www.forosecuador.ec/imgfe/Region-Amazonica-Ecuador-Flora-fauna-rios-clima-1.jpg"
          alt="Amazonia" 
        />
      </div>
    </div>
  )
};
