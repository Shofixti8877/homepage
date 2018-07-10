import React from 'react';
import { Segment, Grid, Header, Button, Icon } from 'semantic-ui-react';
import AboutMe from '../segments/AboutMe';
import Resume from '../segments/Resume';
import Contact from '../segments/Contact';
import Footer from '../segments/Footer';
import Background from '../../images/background2.jpg';



class HomePage extends React.Component {
  state = {
    topButtonVisable: 'hidden'
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY > 200){
      this.setState({ topButtonVisable: 'visible'});
    } else {
      this.setState({ topButtonVisable: 'hidden'});
    }
  }

  jumpToStart = () => {
     const pageStart = document.body.offsetTop;
     window.scroll({ top: pageStart, behavior: "smooth" });
  }

render(){
  return(
    <div>
      <Segment vertical style={{minHeight: '950px', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Header as='h1' style={{ color: 'white', paddingTop: '10em', fontSize: '3rem' }}>Amit Lezmy Reif</Header>
              <p className='large text' style={{ color: 'white' }}>Full Stack Developer</p>
              <p className='large text' style={{ color: 'white', paddingTop: '7em' }}>Scroll Down</p>
              <Icon name='hand point down outline' style={{ color: 'white' }} size='big' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='right'>
              <Button icon basic circular style={{zIndex: '10', position: 'fixed', visibility: `${this.state.topButtonVisable}`}} onClick={() => this.jumpToStart()}>
                <Icon name='angle double up' size='big' />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div className = "ui container" style={{paddingBottom:'820px'}} id='main'>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <AboutMe />
              <Resume />
              <Contact />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Footer />
    </div>
)}
};
export default HomePage;
