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
import { CategoryPillProps } from '@/types/types';

export default function CategoryPill({
  index,
  tasksToggleFunc,
}: CategoryPillProps) {
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
          <ListItemButton
            sx={{ pl: '50px' }}
            onClick={() => tasksToggleFunc(index)}
          >
            <PillContent index={index} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
