import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../public/styles/Main.css';
import '../../public/styles/Main.mobile.css';

const projects = require("json-loader!yaml-loader!../projects.yaml");

const Header = () => (
    <header>
      <nav>
        <span className='kraxx'>kraxx</span>
        <span className='icons'>
          <a href='https://github.com/kraxx/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github-square']} />
          </a>
          <a href='https://www.linkedin.com/in/justinychow/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href='https://codepen.io/kraxx/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'codepen']} />
          </a>
          <a href='https://www.freecodecamp.org/kraxx' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'free-code-camp']} />
          </a>
        </span>
      </nav>
    </header>
)

const ListItem = ({ project, selected, callback }) => (
  <div
    className={'listItem ' + (selected ? 'selected' : '')}
    onClick={() => callback()}
  >
    <h2>{project.title}</h2>
  </div>
)

const Aside = ({ projects, selected, callback }) => (
  <aside>
    <div className='asideHeader'>
      <p className='subHeader'>Projects</p>
      <hr />
    </div>
    <div className='asideList'>
      {projects.map((project, idx) =>
        <ListItem
          key={idx}
          project={project}
          selected={idx === selected ? true : false}
          callback={() => callback(idx)}
        />
      )}
    </div>
  </aside>
)

const Icon = ({ type, url }) => (
  <a href={url} target='_blank'>
    <FontAwesomeIcon
      icon={(() => {
        switch (type) {
          case 'www':
            return ['fas', 'globe']
          case 'github':            
            return ['fab', 'github']
          case 'playstore':
            return ['fab', 'google-play']
        }
      })()}
    />
  </a>
)

const Icons = ({ links }) => (
  <div className='projectLinks'>
    {Object.keys(links).map((type, idx) =>
      <Icon key={idx} type={type} url={links[type]} />
    )}
  </div>
)

const Section = ({ project }) => (
  <section>
    <p className='subHeader'>{project.title}</p>
    <hr />
    <p>{project.description}</p>
    <Icons links={project.links} />
  </section>
)

class Main extends Component {

  constructor() {
    super();
    this.state = {
      selected: 0
    };
    this.projects = projects;
  }

  changeSelected = ( idx ) => {
    this.setState({
      selected: parseInt(idx)
    });
  }

  render() {    return (
      <div className='mainContainer'>
        <Header />
        <main>
          <Aside projects={this.projects} selected={this.state.selected} callback={(idx) => this.changeSelected(idx)} />
          <Section project={this.projects[this.state.selected]} />
        </main>
      </div>
    )
  }
}

export default Main;