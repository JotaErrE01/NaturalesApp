import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import { TemasUnidades } from '../common/TemasUnidades';
import { DataTemasUnidades, ListLinks } from '../../data';
import { Fragment, useState, FC } from 'react';

interface Props {
  className?: string;
}

export const SidebarItems: FC<Props> = ({ className }) => {
  const [subLinksVisible, setsubLinksVisible] = useState({
    unidades: false,
    videos: false,
    actividades: false,
    agradecimientos: false
  });

  return (
    <List
      sx={{ width: '100%', height: '100%' }}
      component="nav"
      className={`bg-emerald-500 min-h-screen overflow-y-auto lg:block max-w-[300px] lg:max-w-[420px] ${className}`}
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
          <i className="fas fa-book text-2xl lg:text-4xl ml-[30%] text-white"></i>
        </ListItemIcon>
        <ListItemText className="text-white" id="listItem" primary="Unidades" />
        {subLinksVisible.unidades ? <i className="fas fa-angle-up mr-5 text-white" /> : <i className="fas fa-angle-down mr-5 text-white" />}
      </ListItemButton>
      <Collapse className="text-white" in={subLinksVisible.unidades} timeout="auto" unmountOnExit>
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
                // key={i}
                onClick={() => setsubLinksVisible({ ...subLinksVisible, [text.toLowerCase()]: !subLinksVisible[id] })}
                sx={{ paddingTop: 2, paddingBottom: 2, marginTop: '2rem' }}
              >
                <ListItemIcon>
                  <i className={`${icon} text-2xl lg:text-4xl ml-[30%] text-white`}></i>
                </ListItemIcon>
                <ListItemText className="text-white" id="listItem" primary={text} />
                {id !== 'agradecimientos' && (subLinksVisible[id] ? <i className="fas fa-angle-up mr-5 text-white" /> : <i className="fas fa-angle-down mr-5 text-white" />)}
              </ListItemButton>
              {
                id !== 'agradecimientos' &&
                <Collapse className="text-white" in={subLinksVisible[id]} timeout="auto" unmountOnExit>
                  {
                    temas!.map(({ text, src, icon }, i) => (
                      <List key={i} component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                        >
                          <ListItemIcon>
                            <i className={`${icon} text-2xl lg:text-4xl ml-[30%] text-white`}></i>
                          </ListItemIcon>
                          <ListItemText primary={text} />
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
    </List>
  )
};
