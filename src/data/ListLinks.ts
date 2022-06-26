import { IListLinks } from "../interfaces";

export const ListLinks: IListLinks[] = [
  {
    text: 'Videos',
    icon: 'fas fa-video',
    id: 'videos',
    temas: [
      {
        text: 'La Evolución',
        src: 'https://www.youtube.com/embed/Cz6VTtlQksE',
        icon: 'fas fa-film',
      },
      {
        text: 'La Gravedad',
        src: 'https://youtube.com/embed/M_hRmxDddmg',
        icon: 'fas fa-film',
      },
      {
        text: 'El Carbono',
        src: 'https://www.youtube.com/embed/XI7plCTNG74',
        icon: 'fas fa-film',
      },
      {
        text: 'El Cambio Climático',
        src: 'https://www.youtube.com/embed/weIBPwFuYwA',
        icon: 'fas fa-film',
      }
    ]
  },
  {
    icon: "fas fa-dice",
    text: "Actividades",
    id: "actividades",
    temas: [
      {
        text: 'Video 1',
        src: 'sdfsd',
      }
    ]
  },
  {
    icon: "fas fa-trophy",
    text: "Agradecimientos",
    id: "agradecimientos",
  },
];