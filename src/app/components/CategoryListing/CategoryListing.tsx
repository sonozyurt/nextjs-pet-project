'use client';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import CategoryPill from './CategoryPill';
import { useState } from 'react';
import { Box } from '@mui/material';
import TaskItemList from '../TaskItems/TaskItemList';
import categories from '@/mockData/mockData';
export default function CategoryListing() {
  const [isAnyTaskOpen, setIsAnyTaskOpen] = useState(false);
  const [currentTasks, setCurrentTasks] = useState([{ id: 0 }]);
  function handle(catIndex: any) {
    setIsAnyTaskOpen(!isAnyTaskOpen);
    setCurrentTasks(categories[catIndex - 1].tasks);
  }
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='div'
        subheader={<ListSubheader component='div'>Categories</ListSubheader>}
      >
        {categories.map((cat, i) => (
          <CategoryPill key={cat.index} index={cat.index} handle={handle} />
        ))}
        {isAnyTaskOpen && (
          <Box position={'absolute'} left={'350px'} top={0} width={'100%'}>
            <TaskItemList tasks={currentTasks} />
          </Box>
        )}
      </List>
    </>
  );
}
