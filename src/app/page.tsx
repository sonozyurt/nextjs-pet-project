import CategoryListing from './components/CategoryListing/CategoryListing';
import TaskItemList from './components/TaskItems/TaskItemList';
import { Box } from '@mui/material';

export default async function Home() {
  return (
    <>
      <Box
        display='flex'
        width='100%'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          display='flex'
          width='80%'
          padding={'0 30px'}
          justifyContent={'center'}
        >
          <CategoryListing />
          <TaskItemList />
        </Box>
      </Box>
    </>
  );
}
