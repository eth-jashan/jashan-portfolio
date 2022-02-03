import React from 'react'
import Header from '../Component/Header'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import image from '../Assets/jashan.jpeg'
import {SiWeb3Dotjs, SiJavascript, SiTypescript,  SiSolidity, SiCss3, SiPython, SiReact, SiFirebase} from 'react-icons/si'

const About = () => {
    return(
        <div style={{height:'100vh', width:'100%', background:'white'}}>
            <Divider style={{fontFamily:'monospace', fontWeight:'bold', fontSize:24, color:'#0B192E'}} textAlign="left">01. About</Divider>
            <div style={{height:'90%', width:'100%', background:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Grid justifyContent='center' alignItems='center' container spacing={2}>
            <Grid item xs={0} md={4}>
            <img src={image} style={{ width:'100%', height:'70%'}}  />
            </Grid>
            <Grid style={{padding:'18px'}} item xs={12} md={6}>
                <Typography fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                Hello! My name is <a style={{color:'green'}}>Jashan</a> and I enjoy creating things that live on the internet. My interest in <a style={{color:'green'}}> Web & Hybrid Mobile development</a> started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                Fast-forward to today, and I’ve had the privilege of working at an freelancing agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, and Evehicle ecosystem platform at <a style={{color:'green'}}>Eveels</a>.
                Here are a few technologies I’ve been working with recently:
                </Typography>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Grid item xs={4} md={4}>
                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiJavascript size={20} color='green' />    JavaScript
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiTypescript size={20} color='green' />    TypeScript
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiSolidity size={20} color='green' />    Solidity
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiPython size={20} color='green' />    Python
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiReact size={20} color='green' />    React
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiReact size={20} color='green' />    React Native
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiWeb3Dotjs size={20} color='green' />    Web3.Js
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiCss3 size={20} color='green' />    CSS
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />

                        <Typography mt={2} fontFamily={"monospace"} textAlign='start' color={"#8892AF"} variant="body1">
                        <SiFirebase size={20} color='green' />    Firebase
                        </Typography>
                        <LinearProgress variant="determinate" value={10} />
                    </Grid>
                </div>
            </Grid>
            </Grid>
            </div>
        </div>
    )
} 

export default About