import { Player } from '@lottiefiles/react-lottie-player';
import { Link, NavLink } from 'react-router-dom';

export const Portada = () => {
  return (
    <div
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      <div
        className='flex flex-col min-h-[60vh] justify-evenly'
      >
        <h1
          className='text-lg mt-5 md:text-2xl xl:text-4xl text-orange-500 md:absolute z-10 pl-5 xl:ml-16 md:w-4/5 top-20 lg:top-16 font-bold lg:mt-auto'
        >Herramientas didácticas multimedia en el aprendizaje receptivo<span className='block mt-5 xl:mt-5 mb-5'>Software Educativo</span>

          <div className='flex justify-between pr-5 md:w-[400px] md:mt-10 xl:mt-0 lg:w-1/2 lg:pr-0 lg:mb-16'>
            <img
              className='w-2/5 lg:w-[30%]'
              src="/ug.png"
              alt="Universidad de Guayaquil"
            />

            <img
              className='w-2/5 lg:w-[30%]'
              src="/logo.png"
              alt="Universidad de Guayaquil"
            />
          </div>

          <div className='w-1/2'>
            <Link
              className="text-2xl md:text-4xl text-orange-600 font-bold border-orange-600 border-solid border-2 rounded-full text-center px-2 md:px-10 py-2 md:py-4 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out z-10 lg:mt-12 lg:static fixed hidden md:block md:bottom-[370px] md:mx-auto left-[0%] right-[0%] bottom-[270px] w-[10rem] md:w-[18rem] lg:mx-auto lg:block"
              to='app'
            >
              <i className="fas fa-arrow-circle-right mr-2 lg:mr-5"></i>
              Iniciar</Link>
          </div>
        </h1>

        <div className='relative'>
          <Player
            src={'https://assets6.lottiefiles.com/packages/lf20_nkwmg07i.json'}
            autoplay
            loop
            className='xl:block xl:w-full xl:h-full rounded-full xl:rounded-none'
          />
          <Link
            className="text-2xl md:text-4xl text-orange-600 font-bold border-orange-600 border-solid border-2 rounded-full text-center md:px-10 py-2 md:py-4 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out absolute top-[35%] left-8 md:hidden px-5"
            to='app'
          >
            <i className="fas fa-arrow-circle-right mr-2 lg:mr-5"></i>
            Iniciar</Link>
        </div>
      </div>

      <Player
        src={'https://assets3.lottiefiles.com/packages/lf20_vknkn9gx.json'}
        autoplay
        loop
        className='absolute z-10 -bottom-10 left-0 w-48 lg:hidden'
      />

      <Player
        src={'https://assets3.lottiefiles.com/packages/lf20_vknkn9gx.json'}
        autoplay
        loop
        className='absolute z-10 -bottom-10 right-0 w-48 -scale-x-100 lg:hidden'
      />

      <Player
        src={'https://assets4.lottiefiles.com/packages/lf20_jggbnfb8.json'}
        autoplay
        loop
        className='absolute z-10 bottom-0 lg:hidden left-0 right-0 w-72 hidden md:block'
      />
    </div >
  )
}
