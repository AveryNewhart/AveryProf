// import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Nav from "../components/Nav"
import { Button } from '@mui/material';
import FloatingBar from '../components/FloatingBar';


const About = () => {
  return (
    <>
    <Nav />
      <h1 style={{ textAlign: 'center', fontFamily: 'Acme', fontWeight: 600, color: '#EBEBEB' }}>ABOUT ME</h1>
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md>
          <Box sx={{ fontFamily: 'Montserrat, sans-serif', borderRadius: '10px', border: '1px solid #33442C', height: '560px', textAlign: 'center', marginTop: '25px', backgroundColor: '#1a1b1b' }}>
            <h2 style={{ fontFamily: 'Acme', color: '#EBEBEB', marginBottom: '0px' }}>WHO AM I</h2>
            <Box sx={{ borderRadius: '10px', margin: '10px 10px', padding: '10px', border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', fontSize: '16px' }} >My name is Avery Newhart, and my journey into the world of development began after serving in the United States Air Force. With over two years of experience in the tech industry, I’ve honed my skills in both front-end and back-end development, making me well-equipped for full-stack roles.</Box>
            <Box sx={{  borderRadius: '10px', margin: '20px', marginLeft: '10px', marginRight: '10px', padding: '10px', border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', fontSize: '16px' }} >I am driven by a deep passion for continuous learning, personal growth, and the collaborative process that elevates not only my skills but also the abilities of those around me. I thrive in environments where teamwork and innovation are at the forefront, always aiming to contribute meaningfully to every project I undertake.</Box>
            <Box sx={{  borderRadius: '10px', marginLeft: '10px', marginRight: '10px', padding: '10px', border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', fontSize: '16px' }}>I am excited about the opportunity to showcase my abilities and exceed expectations in the tech industry. Whether it’s front-end, back-end, or full-stack development, I am ready to tackle new challenges and create something remarkable together with a forward-thinking team.</Box>
          </Box>
        </Grid>
        <Grid md>
        <Box sx={{ fontFamily: 'Montserrat, sans-serif', borderRadius: '10px', border: '1px solid #33442c', height: '560px', textAlign: 'center', marginTop: '25px', backgroundColor: '#1a1b1b' }}>
          <h2 style={{ fontFamily: 'Acme', color: '#EBEBEB', marginBottom: '0px' }}>HISTORY</h2>

          <Box sx={{ borderRadius: '10px', border: '1px solid #33442c', backgroundColor: '#262726', margin: '10px', color: '#EBEBEB' }}>
            <h4 style={{ borderBottom: '2px solid #33442c', fontFamily: 'Acme', fontSize: '18px', margin: '5px', fontWeight: 'bold' }}>Work</h4>
            <p style={{ fontFamily: 'Acme', margin: '5px 0', lineHeight: '1.4', fontWeight: 'bold' }}>Target, Presentation Team Trainer: August 2021 - Present</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '0', textAlign: 'center', fontSize: '16px', margin: '5px 0' }}>
              <li style={{ listStylePosition: 'inside', fontSize: '14px', lineHeight: '1.4', color: '#DDD5D0', listStyle: 'none' }}>
                Train new presentation team members. Reset sections of the store for new products based off the workload schedule and plan for the year.
              </li>
            </ul>
            <p style={{ fontFamily: 'Acme', margin: '5px 0', lineHeight: '1.4', fontWeight: 'bold' }}>United States Air Force, Weather Forecaster: February 2019 - June 2021</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '0', textAlign: 'center', fontSize: '16px', margin: '5px 0' }}>
              <li style={{ listStylePosition: 'inside', fontSize: '14px', lineHeight: '1.4', color: '#DDD5D0', listStyle: 'none' }}>
                Forecast and issue warnings, watches, and advisories for hundreds of point sites/bases in the southeast quarter of the United States. Pre-flight pilot briefings to detail weather to pilots to be the determining factor of their mission, along with in-flight briefings to record the pilots' data they are observing/experiencing weather-wise.
              </li>
            </ul>
          </Box>

          <Box sx={{ borderRadius: '10px', border: '1px solid #33442c', backgroundColor: '#262726', margin: '0 10px', color: '#EBEBEB' }}>
            <h4 style={{ borderBottom: '2px solid #33442c', fontFamily: 'Acme', fontSize: '18px', margin: '5px', fontWeight: 'bold' }}>School</h4>
            <p style={{ fontFamily: 'Acme', margin: '5px 0', lineHeight: '1.4', fontWeight: 'bold' }}>University of Central Florida: October 2022 - May 2023</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '0', textAlign: 'center', fontSize: '16px', margin: '5px 0' }}>
              <li style={{ listStylePosition: 'inside', fontSize: '14px', lineHeight: '1.4', color: '#DDD5D0', listStyle: 'none' }}>Full Stack Web Development</li>
            </ul>
            <p style={{ fontFamily: 'Acme', margin: '5px 0', lineHeight: '1.4', fontWeight: 'bold' }}>Community College of the Air Force: April 2019 - April 2021</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '0', textAlign: 'center', fontSize: '16px', margin: '5px 0' }}>
              <li style={{ listStylePosition: 'inside', fontSize: '14px', lineHeight: '1.4', color: '#DDD5D0', listStyle: 'none' }}>Environmental Sciences</li>
            </ul>
            <p style={{ fontFamily: 'Acme', margin: '5px 0', lineHeight: '1.4', fontWeight: 'bold' }}>Millersville University: 2017 - 2018</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '0', textAlign: 'center', fontSize: '16px', margin: '5px 0' }}>
              <li style={{ listStylePosition: 'inside', fontSize: '14px', lineHeight: '1.4', color: '#DDD5D0', listStyle: 'none' }}>Dual Major Special Education/Early Education</li>
            </ul>
          </Box>
          <Button
            variant="contained"
            type="submit"
            size="large"
            href="/AveryPortSept2024.pdf" 
            target="_blank"
            sx={{
              
              fontFamily: 'Acme',
              border: '1px solid #33442c',
              backgroundColor: '#262726',
              color: '#EBEBEB',
              borderRadius: '10px',
              marginTop: '10px',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '1px solid #EBEBEB',
              },
            }}
          >
            VIEW RESUME
            </Button>
        </Box>
        </Grid>
      </Grid>
    </Box>
    <FloatingBar />
    </>
  )
}

export default About