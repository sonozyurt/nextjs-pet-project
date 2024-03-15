import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { useState } from 'react';
import PillContent from './PillContent';

interface CategoryPillProps {
  index: number;
  handle: (index: number) => void;
}

export default function CategoryPill({ index, handle }: CategoryPillProps) {
  const [open, setOpen] = useState(true);
  const handleExpand = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem>
        <ListItemIcon
          sx={{ cursor: 'pointer', minWidth: 0, mr: '10px' }}
          onClick={handleExpand}
        >
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <PillContent index={index} />
      </ListItem>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: '50px' }} onClick={() => handle(index)}>
            <PillContent index={index} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
