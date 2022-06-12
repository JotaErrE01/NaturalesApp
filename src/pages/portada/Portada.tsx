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
          className='text-5xl md:text-6xl xl:text-8xl text-orange-500 md:absolute z-10 ml-10 xl:ml-16 mt-0 top-60 xl:top-20 font-bold xl:mt-auto'
        >Ciencias <span className='block ml-20 xl:ml-28 mt-5 xl:mt-10'>Naturales</span>
          <Link
            className="text-2xl md:text-4xl text-orange-600 font-bold border-orange-600 border-solid border-2 rounded-full px-10 py-4 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out z-10 lg:ml-52 lg:mt-12 xl:static fixed md:bottom-[370px] left-[0%] right-[0%] m-0 bottom-[180px] w-[15rem] md:w-[18rem] mx-auto"
            to='app'
          >
            <i className="fas fa-arrow-circle-right mr-5"></i>
            Iniciar</Link>
        </h1>

        <Player
          src={'https://assets6.lottiefiles.com/packages/lf20_nkwmg07i.json'}
          autoplay
          loop
          className='xl:block xl:w-full xl:h-full rounded-full xl:rounded-none'
        />
      </div>

      <Player
        src={'https://assets3.lottiefiles.com/packages/lf20_vknkn9gx.json'}
        autoplay
        loop
        className='absolute z-10 -bottom-10 left-0 w-48 xl:hidden'
      />

      <Player
        src={'https://assets3.lottiefiles.com/packages/lf20_vknkn9gx.json'}
        autoplay
        loop
        className='absolute z-10 -bottom-10 right-0 w-48 -scale-x-100 xl:hidden'
      />

      <Player
        src={'https://assets4.lottiefiles.com/packages/lf20_jggbnfb8.json'}
        autoplay
        loop
        className='absolute z-10 bottom-0 xl:hidden left-0 right-0 w-72 hidden md:block'
      />
    </div>
  )
}
