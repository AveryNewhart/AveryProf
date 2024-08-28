// import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Nav from "../components/Nav"
import { Button } from '@mui/material';


const About = () => {
  return (
    <>
    <Nav />
    <h1 style={{ textAlign: 'center' }}>About me(find cool font)</h1>
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md>
          <Box sx={{ borderRadius: '10px', border: '1px solid white', height: '550px', textAlign: 'center', marginTop: '25px' }}>
            <h2>WHO AM I</h2>
            <Box sx={{ borderRadius: '10px', margin: '15px 10px', padding: '10px', border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} >My name is Avery Newhart, and my journey into the world of development began after serving in the United States Air Force. With over two years of experience in the tech industry, I’ve honed my skills in both front-end and back-end development, making me well-equipped for full-stack roles.</Box>
            <Box sx={{  borderRadius: '10px', marginBottom: '15px', marginLeft: '10px', marginRight: '10px', padding: '10px', border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} >I am driven by a deep passion for continuous learning, personal growth, and the collaborative process that elevates not only my skills but also the abilities of those around me. I thrive in environments where teamwork and innovation are at the forefront, always aiming to contribute meaningfully to every project I undertake.</Box>
            <Box sx={{  borderRadius: '10px', marginLeft: '10px', marginRight: '10px', padding: '10px', border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>I am excited about the opportunity to showcase my abilities and exceed expectations in the tech industry. Whether it’s front-end, back-end, or full-stack development, I am ready to tackle new challenges and create something remarkable together with a forward-thinking team.</Box>
          </Box>
        </Grid>
        <Grid md>
          <Box sx={{ borderRadius: '10px', border: '1px solid white', height: '550px', textAlign: 'center', marginTop: '25px'  }}>
            <h2>History</h2>
            <Box sx={{ borderRadius: '10px', border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.05)', margin: '0 10px' }}>
              <h4>School</h4>
              <p>University of Central Florida: October 2022 - May 2023</p>
              <p>Community College of the Air Force: April 2019 - April 2021</p>
              <p>Millersville University: 2017 - 2018</p>
            </Box>
            <Box sx={{ borderRadius: '10px', border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.05)', margin: '10px' }}>
              <h4>Work</h4>
              <p>Target, Presentation Team Trainer: Auguest 2021 - Present</p>
              <p>United States Air Force, Weather Forecaster: February 2019 - June 2021</p>
            </Box>
            <Button>DOWNLOAD RESUME</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default About