import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function SendBtn() {
  return (
    <Stack direction="row" spacing={2} marginTop={1} marginLeft={1} >
      <Button variant="contained" type="submit" endIcon={<SendIcon />} 
      sx={{
        textTransform: 'Capitalize',
        fontFamily: 'ElMesseri',
        fontWeight: 600,
        fontSize: '1.4rem',
        backgroundColor: '#9da9a0',
        ':hover': { bgcolor: '#aed4e6', color:'#012622'}
      }}
      >
        Send
      </Button>
    </Stack>
  );
}