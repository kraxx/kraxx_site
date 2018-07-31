import React, { Component } from 'react';
import '../../public/styles/Aside.css';

/*
** ASIDE: Sidebar list of projects
*/

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

export default Aside;