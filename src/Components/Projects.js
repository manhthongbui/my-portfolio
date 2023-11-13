import React from 'react';
import ProjectBox from './ProjectBox';
import HeazinLP from '../images/HeazinLP.png';
import HeazinBackOffice from '../images/HeazinBackOffice.png';
import QuickEditProduct from '../images/QuickEditProduct.png';
import OneManagementSystem from '../images/OneManagementSystem.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={OneManagementSystem} projectName="One Management System" code='one' />
        <ProjectBox projectPhoto={HeazinBackOffice} projectName="Heazin Back Office" code='heazin_bo'/>
        <ProjectBox projectPhoto={HeazinLP} projectName="Heazin Landing Page" code='heazin_lp'/>
        <ProjectBox projectPhoto={QuickEditProduct} projectName="Quick Edit Product" code='qep'/>
      </div>

    </div>
  )
}

export default Projects