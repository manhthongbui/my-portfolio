import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Manh Thong</h4>
      <h4>Copyright &copy; 2023 manhthongbui</h4>
      <div className='footerLinks'>
        <a href="https://github.com/manhthongbui" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/manhthongbui" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:manhthong.work@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer