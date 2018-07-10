import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';

const Resume = () => (
  <Segment vertical id = "resume">
    <Container text>
      <div className="large text">
        <Header textAlign='center' as='h1'>Resume</Header>
        <Header as='h2'>Skills</Header>
        <p><strong>Proficient with:</strong></p>
        <p> Javascript | Typescript | Html5 | Css3 | Bootstrap | jQuery</p>
        <p>React | AngularJS</p>
        <p>Node.js | PHP</p>
        <p>MongoDB | MySQL</p>
        <p>Object Oriented Programming</p>

        <Header as='h2' style={{paddingTop:'50px'}} >Experience</Header>
        <Header as='h3'>React/Node.js</Header>
        <p><strong>Pathfinder Party Manager</strong></p>
        This is an app was developed using React/Redux for the front end, and Node.js for the backend. The goal of this app is to have shared party resource tools for the Pathfinder RPG game.
        <Header as='h3'>Angular/Node.js</Header>
        <p><strong>Online shopping site</strong></p>
        This app was developed using Angular and node.js. The apps lets the user set up an account, shop for various items in the store, fill up his cart and then place an order.
        <Header as='h3'>jQuery</Header>
        <p><strong>Music player</strong></p>
        This app was developed using jQuery, and makes SQL queries to a server. The app consists of a music player that can play existing playlist with full functionality. The user can search for playlists, and also create new playlists, or delete them, edit them to add or remove songs, and store the new information in the server.
        <Header as='h3'>jQuery/PHP</Header>
        <p><strong>School Administration</strong></p>
        This app was developed using jQuery for the front-end, and PHP for the backend. The app allows the user to log in, and depending on his/her permission level they can manage a course list for a school, add new courses and students, assign students to courses, and view all of the students' and courses' infromation, or add new users. All requests and changes are made using SQL queries to the database.

        <Header style={{paddingTop: '50px'}} as='h2'>Education</Header>
        <p>January-October 2017</p>
        <Header as='h3'>Full-Stack Web development course</Header>
        <Header style={{paddingBottom: '50px'}} as='h4'>John Bryce College</Header>
        <p>2009-2012</p>
        <Header as='h3'>M.Sc. in Nano-tech and Materials, Specialized in Life Sciences</Header>
        <Header style={{paddingBottom: '50px'}} as='h4'>Tel-Aviv Univeristy</Header>
        <p>2006-2009</p>
        <Header as='h3'>B.Sc. in Biotech Engineering, Specialized in cellular and molecular biology, graduated Cum Laude</Header>
        <Header style={{paddingBottom: '50px'}} as='h4'>Ort Braude Academic College of engineering</Header>
      </div>
    </Container>
  </Segment>
);

  export default Resume;
