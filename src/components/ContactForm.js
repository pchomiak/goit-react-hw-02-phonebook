import { Component } from 'react';
import Button from './Button';
import Name from './Name';
import Number from './Number';
import styled from '@emotion/styled';

const FancyForm = styled.form({
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  marginLeft: 5,
});

const StyledSpan = styled.span({
  marginLeft: 5,
  fontWeight: 500,
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  render() {
    return (
      <FancyForm onSubmit={this.handleSubmit}>
        <StyledSpan>Name</StyledSpan>
        <Name type="text" value={this.state.name} onChange={this.handleChange} />
        <StyledSpan>Number</StyledSpan>
        <Number type="tel" number={this.state.number} onChange={this.handleChange} />
        <Button type="submit" label={'Add contact'} />
      </FancyForm>
    );
  }
}

export default ContactForm;
