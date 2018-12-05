import React from 'react'
import ProjectLink from './ProjectLink'

const ProjectMap = props =>
  <div>
    {props.projects.map((item, index) => <ProjectLink key={index} index={index} {...item} />)}
  </div>

  export default ProjectMap