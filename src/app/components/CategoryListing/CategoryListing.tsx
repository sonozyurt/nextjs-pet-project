'use client';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import CategoryPill from './CategoryPill';
import { useState } from 'react';
import { Box } from '@mui/material';
import TaskItemList from '../TaskItems/TaskItemList';
import categories from '@/mockData/mockData';

export default function CategoryListing() {
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const [currentTasks, setCurrentTasks] = useState([{ id: 0 }]);
  function toggleTasks(catIndex: number) {
    setIsTasksOpen(!isTasksOpen);
    setCurrentTasks(categories[catIndex].tasks);
  }
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='div'
        subheader={<ListSubheader component='div'>Categories</ListSubheader>}
      >
        {categories.map((cat) => (
          <CategoryPill
            key={cat.index}
            index={cat.index}
            tasksToggleFunc={toggleTasks}
          />
        ))}
        {isTasksOpen && (
          <Box position={'absolute'} left={'350px'} top={0} width={'100%'}>
            <TaskItemList tasks={currentTasks} />
          </Box>
        )}
      </List>
    </>
  );
}
