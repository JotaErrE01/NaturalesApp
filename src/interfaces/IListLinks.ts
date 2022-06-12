export interface IListLinks {
  text: 'Videos' | 'Actividades' | 'Agradecimientos',
  icon: string;
  id: 'videos' | 'actividades' | 'agradecimientos';
  temas?: string[];
}
