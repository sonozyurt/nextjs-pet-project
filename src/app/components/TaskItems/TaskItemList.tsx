import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Edit } from '@mui/icons-material';
import { ListItemIcon, ListSubheader } from '@mui/material';
import { TaskItemListProps } from '@/types/types';

export default function TaskItemList({ tasks }: TaskItemListProps) {
  return (
    <Box>
      <Grid item xs={12} md={6}>
        <div>
          <List
            subheader={<ListSubheader component='div'>Tasks</ListSubheader>}
          >
            {tasks.map((task) => {
              return (
                <ListItem
                  key={task.id}
                  secondaryAction={
                    <IconButton edge='end'>
                      <Edit />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <Checkbox />
                  </ListItemIcon>
                  <ListItemText primary={`Single-line item ${task.id}`} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    </Box>
  );
}
