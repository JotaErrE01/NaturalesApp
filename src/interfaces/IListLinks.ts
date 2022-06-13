export interface IListLinks {
  text: 'Videos' | 'Actividades' | 'Agradecimientos',
  icon: string;
  id: 'videos' | 'actividades' | 'agradecimientos';
  temas?: ITema[];
}

interface ITema {
  text: string;
  icon?: string;
  src: string;
}
