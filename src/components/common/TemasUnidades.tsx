import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { FC, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  text: any;
  temas: { path: string, text: string }[];
  icon: string;
}

export const TemasUnidades: FC<Props> = ({ text, temas, icon }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <List component="div" disablePadding>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{ pl: 4 }}
        >
          <ListItemIcon>
            <i className={`${icon} lg:text-4xl ml-[30%] text-white`}></i>
          </ListItemIcon>
          <ListItemText primary={text} />
          {open ? <i className="fas fa-angle-up mr-5" /> : <i className="fas fa-angle-down mr-5" />}
        </ListItemButton>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {
          temas.map(({ path, text }, i) => (
            <List component="div" disablePadding key={i}>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(`${path}`)} >
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </List>
          ))
        }
      </Collapse>
    </Fragment>
  )
};
