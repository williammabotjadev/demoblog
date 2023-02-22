import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function HomeForm() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          id="name"
          label="Name"
          variant="standard"
        />
        <TextField
          id="email"
          label="Email"
          variant="standard"
        />
        <TextField
          id="phone"
          label="Phone"
          variant="standard"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </Box>
      <Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Send</Button>
      </Stack>
      </Box>
    </Box>
  );
}
