import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import CategoryPill from './CategoryPill';

export default async function CategoryListing() {
  const categories = [1, 2, 3, 4, 5];
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='div'
        subheader={<ListSubheader component='div'>Categories</ListSubheader>}
      >
        {categories.map((num, i) => (
          <CategoryPill key={num} index={i} />
        ))}
      </List>
    </>
  );
}
