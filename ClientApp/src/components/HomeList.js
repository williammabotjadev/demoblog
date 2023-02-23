import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import axios from 'axios';

export default function HomeList() {

  const [articles, setArticles] = React.useState([]);

  function getArticles()
  {
      const url = "https://localhost:44446/api/articles";
      axios.get(url)
      .then(res => {
        console.log(res.data);
        setArticles(state => res.data);
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    getArticles();
  }, [])

  React.useEffect(() => {
    console.log("Articles fetched");
  }, [articles])

  return (
    <>
      {articles?.map((article, index) => 
       <>
        <List sx={{ width: '100%', maxWidth: 640, bgcolor: 'background.paper' }}>
          <ListItem key={index} alignItems="flex-start">
            <Link href={`/article/${article.id}`}>
            <ListItemText
              primary={article.title}
              secondary={
                <React.Fragment>
                  {article.body.substring(0, 50)}...
                </React.Fragment>
              }
            />
            </Link>
            <br />
            <Typography variant="body2">
              <strong>Author : {article.author}</strong>
            </Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
         
        </List> 
        </>
      )}
    </>
  );
}