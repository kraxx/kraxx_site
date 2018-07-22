import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aside from './Aside';
import Section from './Section';
import About from './About';
import '../../public/styles/Main.css';

const projects = require("json-loader!yaml-loader!../projects.yaml");

const Header = ({ callback, aboutPage }) => (
    <header>
      <nav>
        <span className='kraxx'>kraxx</span>
        <span className='icons'>
         {/* <a onClick={ () => callback() }>
            {aboutPage
              ? <FontAwesomeIcon icon={['fas', 'arrow-circle-left']} />
              : <FontAwesomeIcon icon={['fas', 'question-circle']} />
            }
          </a>*/}
          <a href='https://github.com/kraxx/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github-square']} />
          </a>
          <a href='https://www.linkedin.com/in/justinychow/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </span>
      </nav>
    </header>
)

class Main extends Component {

  constructor() {
    super();
    this.state = {
      selected: 0,
      aboutPage: false
    };
    this.projects = projects;
  }

  changeSelected = ( idx ) => {
    this.setState({
      selected: parseInt(idx)
    });
  }

  toggleAboutPage = () => {
    this.setState({
      aboutPage: !this.state.aboutPage
    });
  }

  render() {
    return (
      <div className='mainContainer'>
        <Header aboutPage={this.state.aboutPage} callback={ () => this.toggleAboutPage() }/>
        {this.state.aboutPage ? (
          <About callback={ () => this.toggleAboutPage() } />
        ) : (
          <main className='projectContainer'>
            <Aside projects={this.projects} selected={this.state.selected} callback={(idx) => this.changeSelected(idx)} />
            <Section project={this.projects[this.state.selected]} />
          </main>        
        )}
      </div>
    )
  }
}

export default Main;