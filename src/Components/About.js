import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Manh Thong</b> and I am from Quang Ngai Province, Viet Nam.
            I'm a <b>Javascript/ Typescript developer</b>. <br/><br/>
            I have done an internship as a <b>Software developer</b> at STECH which is a social network startup(2021).<br/><br/>
            Currently I have 2 years experiences with <b>React/ NodeJs(NestJs) stack</b><br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Nest' />
        <Skills skill='AWS' />
        <Skills skill='Nginx' />
        <Skills skill='EC2' />
        <Skills skill='PM2' />
        <Skills skill='Vercel' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Postgres' />
        <Skills skill='MySQL' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Typescript' />
        <Skills skill='Python' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        
      </div>
    </>
  )
}

export default About