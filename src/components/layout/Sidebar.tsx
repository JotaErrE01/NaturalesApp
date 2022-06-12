import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { Fragment, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { TemasUnidades } from "../common";
import { IListLinks } from "../../interfaces";

const ListLinks: IListLinks[] = [
  {
    text: 'Videos',
    icon: 'fas fa-play',
    id: 'videos',
    temas: ['Video 1', 'Video 2']
  },
  {
    icon: "fas fa-dice",
    text: "Actividades",
    id: "actividades",
    temas: ['Video 1', 'Video 2']
  },
  {
    icon: "fas fa-trophy",
    text: "Agradecimientos",
    id: "agradecimientos",
  },
]

const DataTemasUnidades = [
  {
    text: 'Niveles de organización en los seres vivos',
    icon: 'fas fa-1',
    temas: ['Tema 1', 'Tema 2']
  },
  {
    text: 'Cambios en los seres vivos',
    icon: 'fas fa-2',
    temas: ['Tema 1', 'Tema 2']
  },
  {
    text: 'La fuerza de la gravedad',
    icon: 'fas fa-3',
    temas: ['Tema 1', 'Tema 2']
  },
  {
    text: 'Nuestro Universo',
    icon: 'fas fa-4',
    temas: ['Tema 1', 'Tema 2']
  },
  {
    text: 'Acción del ser humano sobre la naturaleza',
    icon: 'fas fa-5',
    temas: ['Tema 1', 'Tema 2']
  },
  {
    text: 'Nuestro Planeta',
    icon: 'fas fa-6',
    temas: ['Tema 1', 'Tema 2']
  },
]

export const Sidebar = () => {
  const [subLinksVisible, setsubLinksVisible] = useState({
    unidades: false,
    videos: false,
    actividades: false,
    agradecimientos: false
  });

  return (
    <div className="font-bold text-white">
      <List
        sx={{ width: '100%', maxWidth: 370 }}
        component="nav"
        className="bg-emerald-500 min-h-screen max-h-screen overflow-y-auto"
        subheader={
          <div className="min-h-[250px] bg-emerald-500 grid place-items-center">
            <div className="rounded-full w-56 h-48 bg-white ring-offset-4 ring-2 ring-offset-orange-500">
              <Player
                src={'https://assets6.lottiefiles.com/packages/lf20_hocmonst.json'}
                loop
                autoplay
                className="w-44"
              />
            </div>
          </div>
        }
      >
        <ListItemButton
          onClick={() => setsubLinksVisible({ ...subLinksVisible, unidades: !subLinksVisible.unidades })}
          sx={{ paddingTop: 2, paddingBottom: 2, marginTop: '2rem' }}
        >
          <ListItemIcon>
            <i className="fas fa-book text-4xl ml-[30%] text-white"></i>
          </ListItemIcon>
          <ListItemText id="listItem" primary="Unidades" />
          {subLinksVisible.unidades ? <i className="fas fa-angle-up mr-5" /> : <i className="fas fa-angle-down mr-5" />}
        </ListItemButton>
        <Collapse in={subLinksVisible.unidades} timeout="auto" unmountOnExit>
          {
            DataTemasUnidades.map(({ text, temas, icon }, i) => (
              <TemasUnidades text={text} temas={temas} icon={icon} key={i} />
            ))
          }
        </Collapse>

        {
          ListLinks.map(({ icon, text, id, temas }, i) => {
            return (
              <Fragment key={id}>
                <ListItemButton
                  key={i}
                  onClick={() => setsubLinksVisible({ ...subLinksVisible, [text.toLowerCase()]: !subLinksVisible[id] })}
                  sx={{ paddingTop: 2, paddingBottom: 2, marginTop: '2rem' }}
                >
                  <ListItemIcon>
                    <i className={`${icon} text-4xl ml-[30%] text-white`}></i>
                  </ListItemIcon>
                  <ListItemText id="listItem" primary={text} />
                  {id !== 'agradecimientos' && (subLinksVisible[id] ? <i className="fas fa-angle-up mr-5" /> : <i className="fas fa-angle-down mr-5" />)}
                </ListItemButton>
                {
                  id !== 'agradecimientos' &&
                  <Collapse in={subLinksVisible[id]} timeout="auto" unmountOnExit>
                    {
                      temas!.map((tema) => (
                        <List component="div" disablePadding>
                          <ListItemButton
                            sx={{ pl: 4 }}
                          >
                            {/* <ListItemIcon>
                              <i className={`${icon} text-4xl ml-[30%] text-white`}></i>
                            </ListItemIcon> */}
                            <ListItemText primary={tema} />
                          </ListItemButton>
                        </List>
                      ))
                    }
                  </Collapse>
                }
              </Fragment>
            )
          })
        }

        {/* <ListItemButton
          onClick={() => setsubLinksVisible({ ...subLinksVisible, [text.toLowerCase()]: !subLinksVisible[id] })}
          sx={{ paddingTop: 2, paddingBottom: 2, marginTop: '2rem' }}
        >
          <ListItemIcon>
            <i className={`${icon} text-4xl ml-[30%] text-white`}></i>
          </ListItemIcon>
          <ListItemText id="listItem" primary={text} />
          {subLinksVisible[id] ? <i className="fas fa-angle-up mr-5" /> : <i className="fas fa-angle-down mr-5" />}
        </ListItemButton> */}
      </List>
    </div>
  )
};
