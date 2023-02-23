import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import axios from 'axios';

export default function HomeForm() {

  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [messageSent, setMessageSent] = React.useState(false);

  function handleSubmit(e)
  {
      sendMessage();
  }

  function sendMessage()
  {
    const url = "https://localhost:44446/api/contacts";

    const req_headers = {
      "ContentType": "application/json"
    };

    const req_body = {
      id: parseInt(Math.random() * 1000),
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    axios.post(url, req_body, {
        headers: req_headers
    })
    .then(res => {
      console.log(res);
      if (res.status === 201)
      {
        setMessageSent(state => true);
      }})
    .catch(err => console.log(err));

  }

  return (
    <>
    {messageSent ? <Typography
                style={{
                  margin: '80px 40px 0px 60px'
                }}>Your Message was Successfully Sent!</Typography> :
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="standard"
          onChange={
            (e) => setName(state => e.target.value)
          }
        />
        <TextField
          id="email"
          name="email"
          inputProps={{ pattern: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$' }} 
          label="Email"
          variant="standard"
          onChange={
            (e) => setEmail(state => e.target.value)
          }
        />
        <TextField
          id="phone"
          name="phone"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
          label="Phone"
          variant="standard"
          onChange={
            (e) => setPhone(state => e.target.value)
          }
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          onChange={
            (e) => setMessage(state => e.target.value)
          }
        />
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
      <Stack direction="row" spacing={2}>
        <Button 
            onClick={handleSubmit}
            variant="contained">Send</Button>
      </Stack>
      </Box>
    </Box>}
    </>
  );
}
