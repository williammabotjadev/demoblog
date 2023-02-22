import React, { Component } from 'react';
import HomeForm from '../components/HomeForm';
import Box from '@mui/material/Box';

export class ContactForm extends Component {
  static displayName = ContactForm.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <Box>
          <HomeForm />
      </Box>
    );
  }
}
