import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class TopNavigation extends React.Component {
    state = { activeItem: 'amit' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  jumpToSection = (section) => {
     const element = document.getElementById(section);
     const topOfElement = element.offsetTop + 910;
     window.scroll({ top: topOfElement, behavior: "smooth" });
  };

  render(){
    const { activeItem } = this.state

    return(

      <header>
        <Menu inverted color='blue'  secondary fixed='top'>
          <Menu.Item header name='amit' active={activeItem === 'amit'} onClick={this.handleItemClick} as={Link} to="/">
            Amit Lezmy Reif
          </Menu.Item>
          <Menu.Menu position ='right'>
            <Menu.Item onClick={()=> this.jumpToSection('aboutme')}>
              About Me
            </Menu.Item>
            <Menu.Item onClick={()=> this.jumpToSection('resume')}>
              Resume
            </Menu.Item>
            <Menu.Item onClick={()=> this.jumpToSection('contact')}>
              Contact
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </header>
)
}
};

TopNavigation.propTypes = {
};

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(TopNavigation);
