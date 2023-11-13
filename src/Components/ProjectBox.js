import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName, code}) => {
  const desc = {
    oneDesc  : "A WMS (Warehouse management system), OMS (Orders Management system) that manage your product, and your orders sync with multiple marketplace supported",
    oneGithub : "",
    oneWebsite : "https://fulfil.ztoasia.com",
    
    heazin_lpDesc : "It a landing page that introduce Heazin ecosystem. Here you can buy medicines. Or you can be a agency/ merchant can sell your products.",
    heazin_lpGithub : "",
    heazin_lpWebsite : "https://beta.heazin.com/",

    heazin_boDesc : "A Back Office page manage all user in Heazin ecosystem. Provide manage Seller, Buyer, Chat support, Products",
    heazin_boGithub : "",
    heazin_boWebsite : "https://beta.heazin.com/",

    qepDesc:"A Plugin of Shopify that saving your time to manage and update your products with the best interface. You can do all main features the product actually need",
    qepGithub:"",
    qepWebsite:"https://demoqep.2fsoftapp.com/wp-admin/admin.php?page=c2fsoft-qepp-submenu-page"
  }

  let show ='';
  if(desc[code + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[code + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[code + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[code + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox