import React, { Component } from 'react';
import Box from '@mui/material/Box';
import HomeList from '../components/HomeList';
import Typography from '@mui/material/Typography';

import axios from 'axios';

export default function Home() {

  const [articlesFetched, setArticlesFetched] = React.useState(false);
  
    const initialArticles = [
      {
        id: 1,
        title: "Overview of React",
        body: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.   
        React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.`,
        Author: "Wikipedia Contributors"
      },
      {
        id: 2,
        title: "React Components",
        body: `React code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming convention (capitalize camelCase). Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass the values between components through "props".`,
        Author: "Wikipedia Contributors"
      },
      {
        id: 3,
        title: "React Hooks",
        body: `
        On February 16, 2019, React 16.8 was released to the public.[11] The release introduced React Hooks.[12] Hooks are functions that let developers "hook into" React state and lifecycle features from function components.[13] Hooks do not work inside classes — they let you use React without classes.[14]
        
        React provides a few built-in hooks like useState,[15] useContext, useReducer , useMemo and useEffect.[16] Others are documented in the Hooks API Reference.[17] useState and useEffect, which are the most commonly used, are for controlling state and side effects respectively`,
        Author: "Wikipedia Contributors"
      },
      {
        id: 4,
        title: "Virtual DOM",
        body: `Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[20] This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[21]

        It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.`,
        Author: "Wikipedia Contributors"
      }
    ];

    function postArticle(article)
    {
        const url = `https://localhost:44446/api/articles`;
        const data = {
          Id: article.id,
          Title: article.title,
          Body: article.body,
          Author: article.Author
        };

        axios.post(url, data)
        .then(res => {
          setArticlesFetched(state => true);
          console.log(res);
        })
        .catch(err => console.log(err));
    }

    React.useEffect(() => {
      for (let article of initialArticles)
      {
        postArticle(article);
      }
    }, []);

    return (
      <Box>
        {articlesFetched ? 
        <Typography
          style={{
            margin: '80px 40px 0px 40px'
          }}
          variant="h5"
        >Articles not yet fetched... loading...</Typography> :
          <HomeList />}
      </Box>
    );
  
}
