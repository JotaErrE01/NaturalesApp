export interface IListLinks {
  text: 'Videos' | 'Actividades' | 'Agradecimientos' | 'Preguntas',
  icon: string;
  id: 'videos' | 'actividades' | 'agradecimientos' | 'preguntas';
  temas?: ITema[];
}

interface ITema {
  text: string;
  icon?: string;
  src: string;
}
