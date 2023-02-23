import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import axios from 'axios';

export default function HomeList() {

  const [articles, setArticles] = React.useState(null);

  function getArticles()
  {
      const url = "https://localhost:44446";
      axios.get(url)
      .then(res => {
        console.log(res);
        setArticles(state => res);
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
      {articles?.map((article, index) => 
       <>
        <List sx={{ width: '100%', maxWidth: 640, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {article.title}
                  </Typography>
                  {article.body.substring(0, 30)}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
         
        </List> 
        </>
      )};
    </>
  );
}