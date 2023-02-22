import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import axios from 'axios';

export default function HomeForm() {

  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  function handleSubmit(e)
  {
      setName(state => e.target.name);
      setEmail(state => e.target.email);
      setPhone(state => e.target.phone);
      setMessage(state => e.target.message);
      sendMessage();
  }

  function sendMessage()
  {
    const url = "https://localhost:44446/api/contacts";

    const req_headers = {
      "ContentType": "application/json"
    };

    const req_body = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    axios.post(url, req_body, {
        headers: req_headers
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  }

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
          name="name"
          label="Name"
          variant="standard"
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="standard"
        />
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          variant="standard"
        />
        <TextField
          id="message"
          name="message"
          label="Multiline"
          multiline
          rows={4}
          variant="standard"
        />
      </Box>
      <Box>
      <Stack direction="row" spacing={2}>
        <Button 
            onCanPlay={handleSubmit}
            variant="contained">Send</Button>
      </Stack>
      </Box>
    </Box>
  );
}
