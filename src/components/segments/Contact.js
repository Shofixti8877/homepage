import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';


const Contact = () => (
  <Segment vertical textAlign='center' id = "contact">
    <Container text>
      <Header style={{marginTop:'50px'}} as='h2'>Contact Information</Header>
      Contact me at : <a href="mailto:amitreif@gmail.com">amitreif@gmail.com</a>
    </Container>
  </Segment>
);

  export default Contact;
