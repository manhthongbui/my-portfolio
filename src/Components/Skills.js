import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaAws} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiNginx} from "react-icons/di";
import {SiAmazonec2, SiExpress, SiMongodb, SiMysql, SiNestjs, SiPm2, SiPostgresql, SiTypescript, SiVercel} from "react-icons/si";
import Tooltip from './Tooltip';

const Skills = ({skill}) => {
    const icon = {
      AWS: <FaAws/>,
        Python: <FaPython/>,
        React: <FaReact/>,
        Nest: <SiNestjs/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Vercel : <SiVercel/>,
        MySQL: <SiMysql/>,
        Postgres: <SiPostgresql/>,
        Typescript: <SiTypescript/>,
        EC2: <SiAmazonec2/>,
        PM2: <SiPm2/>,
        Nginx: <DiNginx/>,
    }
    
  return (
    <div  title={skill} className='SkillBox'>
      <Tooltip content={skill}>
      {icon[skill]}
      </Tooltip>
    </div>
  )
}

export default Skills
