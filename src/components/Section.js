import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../public/styles/Section.css';

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
          case 'codepen':
            return ['fab', 'codepen']
          case 'freecodecamp':
            return ['fab', 'free-code-camp']
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

export default Section;