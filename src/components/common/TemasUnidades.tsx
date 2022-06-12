import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { FC, Fragment, useState } from 'react';

interface Props {
  text: any;
  temas: string[];
  icon: string;
}

export const TemasUnidades: FC<Props> = ({ text, temas, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <List component="div" disablePadding>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{ pl: 4 }}
        >
          <ListItemIcon>
            <i className={`${icon} text-4xl ml-[30%] text-white`}></i>
          </ListItemIcon>
          <ListItemText primary={text} />
          {open ? <i className="fas fa-angle-up mr-5" /> : <i className="fas fa-angle-down mr-5" />}
        </ListItemButton>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {
          temas.map((tema, i) => (
            <List component="div" disablePadding key={i}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={tema} />
              </ListItemButton>
            </List>
          ))
        }
      </Collapse>
    </Fragment>
  )
};
