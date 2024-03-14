'use client';
import { Add, Check, Delete, Edit } from '@mui/icons-material';
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { useState } from 'react';

export default function PillContent({ index }: any) {
  const [isEditMode, setIsEditMode] = useState(false);

  const [categoryName, setCategoryName] = useState(`Category ${index + 1}.1`);

  const handleCategoryChange = (event: any) => {
    setCategoryName(event.target.value);
  };
  const handleEditOnCategory = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      {isEditMode ? (
        <form action='submit'>
          <Box display={'flex'} width={'100%'}>
            <TextField
              id='outlined-basic'
              value={categoryName}
              variant='outlined'
              onChange={handleCategoryChange}
            />
            <IconButton
              aria-label='check'
              size='small'
              type='submit'
              onClick={handleEditOnCategory}
            >
              <Check fontSize='small' />
            </IconButton>
          </Box>
        </form>
      ) : (
        <ListItemText primary={categoryName} />
      )}
      <ListItemIcon>
        <Edit
          sx={{ px: '10px', cursor: 'pointer' }}
          onClick={handleEditOnCategory}
        />
        <Delete />
        <Add />
      </ListItemIcon>
    </>
  );
}
