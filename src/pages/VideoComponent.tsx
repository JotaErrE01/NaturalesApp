import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { useMemo } from 'react';

export const VideoComponent = () => {
  const { search } = useLocation();
  const { src, title } = useMemo(() => parse( search ), [ search ]);  

  return (
    <div className='w-full'>
      <h1 className="mt-12 text-3xl lg:text-5xl text-center text-violet-500 font-bold">{ title }</h1>

      <iframe className='rounded-lg mx-auto mt-10 w-[90%] aspect-video shadow-sm bg-slate-500 shadow-gray-500' src={ src!.toString() } title="Ciencia express: selección natural" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
};
