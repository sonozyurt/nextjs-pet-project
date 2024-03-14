import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import CategoryPill from './CategoryPill';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default async function CategoryListing() {
  const categories = [1, 2, 3, 4, 5];
  return (
    <>
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Categories
          </ListSubheader>
        }
      >
        {categories.map((num) => (
          <div key={num}>
            <CategoryPill />
          </div>
        ))}
      </List>
    </>
  );
}
