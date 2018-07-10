import React from 'react';
import { Segment, Header, Container, Image } from 'semantic-ui-react';

const AboutMe = () => (
  <Segment vertical id = "aboutme">
    <Container text>
      <Header textAlign='center' as='h1'>About me</Header>
      <p className="large text">
        <Image src={require('../../images/1.jpg')} floated="right" rounded size="small"  />
        Hey there! My name is Amit Lezmy Reif, and I am a junior Full Stack Developer. I've started programming in 2017, when I decided to make a career change. I've studied Full-Stack development at John Bryce College, and discovered that I had a real passion for web development. I'm currently looking for my next challenge, so feel free to contact me!
      </p>


    </Container>
  </Segment>
);

  export default AboutMe;
