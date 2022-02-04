import React from 'react'
import Header from '../Component/Header'
import Typography from '@mui/material/Typography';
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'
import welcome from '../Assets/welcome.png'
const Home = () => {
    return(
        <div style={{height:'100vh', width:'100%', background:'#0B192E'}}>
            <Header />
            <div style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <img src={welcome} style={{ width:'200px', height:'200px', alignSelf:'center'}}  />
                <Typography alignSelf='center' textAlign='center' display={'flex'}  fontFamily={"monospace"} color={"white"} variant="h3" gutterBottom component="div">
                    Jashan Shetty
                </Typography>
                <Typography alignSelf='center' textAlign='center' display={'flex'} fontFamily={"monospace"} color={"#8892AF"} variant="h4" gutterBottom component="div">
                    I build things for the web.
                </Typography>
                <Typography alignSelf='center' display={'flex'} fontFamily={"monospace"} textAlign='center' color={"#8892AF"} variant="body1">
                    I’m a software engineer specializing in building (and occasionally<br/>
                    designing) exceptional digital experiences. Currently, I’m focused on <br/>
                    building accessible, decentralised apps for Web3.0
                </Typography>
                <div style={{alignSelf:'center', margin:20}}>
                    <BsGithub size={20} color='white' />
                    <BsLinkedin size={20} style={{marginLeft:20}} color='white' />
                    <BsTwitter size={20} style={{marginLeft:20}} color='white' />
                </div>
            </div>
        </div>
    )
} 

export default Home