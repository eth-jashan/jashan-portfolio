import React from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'
import Button from '@mui/material/Button';
import contactJashan from '../Assets/contactjashan.jpeg'
import CustomizedAccordions from '../Component/CustomAcordion';

const Experience = () => {
    return(
        <div style={{height:'100vh', width:'100%', background:'#0B192E'}}>
            <Divider style={{fontFamily:'monospace', fontWeight:'bold', fontSize:24, color:'white'}} textAlign="left">02. Experience</Divider>
            {/* <div style={{height:'90%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}> */}
            {/* <img src={contactJashan} style={{ width:'200px', height:'200px', alignSelf:'center'}}  /> */}
            <div style={{display:'flex', alignSelf:'center', justifyContent:'center', flexDirection:'column', width:'100%', height:'90%'}}>
            <CustomizedAccordions />
            </div>
            {/* </div> */}
        </div>
    )
} 

export default Experience