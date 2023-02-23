import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SingleArticle() {

  const [article, setArticle] = React.useState(null);

  function getArticle()
  {
   
    const id =  parseInt(window.location.pathname.replace("/article/", ""));
    const url = `https://localhost:44446/api/articles/${id}`;

    axios.get(url)
    .then(res => {
        console.log(res.data);
        setArticle(res.data);
    })
  }

  React.useEffect(() => {
        getArticle();
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <br />
            <Typography
              style={{
                margin: '80px 0px 40px 0px'
              }}
              variant="h3">
                {article?.title}
            </Typography>
            <br />
            <Typography variant="body1">
                {article?.body}
            </Typography>
            <br />
            <Typography style={{ margin: '40px 0px 0px 0px' }} variant="body2">
                {article?.author}
            </Typography>
      </Grid>
    </Box>
  );
}
