import React, { Component } from 'react';
import Box from '@mui/material/Box';
import HomeList from '../components/HomeList';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Box>
          <HomeList />
      </Box>
    );
  }
}
