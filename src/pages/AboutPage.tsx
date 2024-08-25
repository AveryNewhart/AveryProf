// import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Nav from "../components/Nav"


const About = () => {
  return (
    <>
    <Nav />
    <h1 style={{ textAlign: 'center' }}>About me(find cool font)</h1>
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md>
          <Box sx={{ border: '1px solid red', height: '550px', textAlign: 'center', marginTop: '25px' }}>
            <h2>WHO AM I</h2>
            <p>bio section will be here</p>
          </Box>
        </Grid>
        <Grid md>
          <Box sx={{ border: '1px solid green', height: '550px', textAlign: 'center', marginTop: '25px'  }}>
            <h2>SCHOOL/WORK/SKILLS(resume)</h2>
            <p>school</p>
            <p>work</p>
            <p>skills</p>
            <h4>resume download button</h4>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default About