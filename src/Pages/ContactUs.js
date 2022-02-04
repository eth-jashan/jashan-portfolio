import React from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'
import Button from '@mui/material/Button';
import contactJashan from '../Assets/contactjashan.jpeg'

const ContactUs = () => {
    return(
        <div style={{height:'100vh', width:'100%', background:'white'}}>
            <Divider style={{fontFamily:'monospace', fontWeight:'bold', fontSize:24, color:'#0B192E'}} textAlign="left">04. Contact</Divider>
            <div style={{height:'90%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <img src={contactJashan} style={{ width:'200px', height:'200px', alignSelf:'center'}}  />
                <Typography textAlign='center'  fontFamily={"monospace"} color={"#0B192E"} variant="h4" gutterBottom component="div">
                    Get In Touch
                </Typography>
                {/* <Typography  fontFamily={"monospace"} color={"#8892AF"} variant="h3" gutterBottom component="div">
                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </Typography> */}
                <Typography width={'70%'} display={'flex'} alignSelf='center' textAlign='center'  fontFamily={"monospace"}  color={"#8892AF"} variant="body1">
                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </Typography>
                <div style={{alignSelf:'center', margin:20}}>
                    <BsGithub size={20} color='#0B192E' />
                    <BsLinkedin size={20} style={{marginLeft:20}} color='#0B192E' />
                    <BsTwitter size={20} style={{marginLeft:20}} color='#0B192E' />
                </div>
                <Button style={{width:'50%', alignSelf:'center', fontFamily:'monospace'}} variant="outlined">Say Namaste 🙏</Button>
            </div>
        </div>
    )
} 

export default ContactUs