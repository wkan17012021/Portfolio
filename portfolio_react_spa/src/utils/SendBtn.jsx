import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function SendBtn() {
  return (
    <Stack direction="row" spacing={2} marginTop={1} marginLeft={1} >
      <Button variant="contained" endIcon={<SendIcon />} 
      sx={{
        backgroundColor: '#9da9a0',
        ':hover': { bgcolor: '#aed4e6', color:'whitesmoke'}
      }}
      >
        Send
      </Button>
    </Stack>
  );
}