// import React from 'react';
import { Box, Paper, Link, Typography } from '@mui/material';

const Home = () => {
  return (
<Paper
  sx={{
    padding: '2rem',
    background: 'linear-gradient(145deg, #121212, #121212, #33442C)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'gradientMove 10s ease infinite', // Animation added
    '@keyframes gradientMove': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
    backgroundSize: '200% 200%', // Allows smooth animation
  }}
>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          position: 'relative',
        }}
      >
        {/* Image box */}
        <Box
          sx={{
            width: '200px',
            height: '200px',
            backgroundImage: 'url(/images/profCenter.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            zIndex: 1,
          }}
        />
        {/* Text Section */}
        <Box sx={{ borderRadius: '10px', margin: '10px', padding: '10px', border: '5px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center', zIndex: 2 }}>
          <Typography variant="h2" sx={{  fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2.5rem' }}>
            Hello, I am Avery
          </Typography>
          <Typography variant="subtitle1" sx={{  fontFamily: 'Montserrat, sans-serif', marginTop: '1rem', fontSize: '1.25rem', color: '#C7BDBF' }}>
            Air Force Veteran turned passionate full-stack web developer
          </Typography>
        </Box>
      </Box>

      {/* Navigation Boxes */}
      <Box sx={{  fontFamily: 'Montserrat, sans-serif', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

      <Paper
           sx={{
            borderRadius: '10px', margin: '10px', padding: '10px', border: '2px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center',
            width: '200px'
          }}
        >
          <Typography
            variant="h6"
            sx={{
            borderBottom: '5px solid #33442c',
            display: 'inline-block',
            width: 'fit-content',
            margin: '0 auto', 
          }}
          >Learn More
          </Typography>
          <Typography style={{ color: '#C7BDBF', margin: '5px' }} variant="body2">Discover more about my journey</Typography>
          <Link href="/about" sx={{ borderRadius: '10px', textDecoration: 'none', border: '2px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', marginBottom: '10px', marginTop: '1rem', display: 'block',
             '&:hover': { backgroundColor: '#33442c', border: '2px solid #ddd5d0' }, }}>
            More About Me
          </Link>
        </Paper>

        <Paper
           sx={{
            borderRadius: '10px', margin: '10px', padding: '10px', border: '2px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center',
            width: '200px'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              borderBottom: '5px solid #33442c',
              display: 'inline-block',
              width: 'fit-content',
              margin: '0 auto', 
            }}
          >View Projects
          </Typography>
          <Typography style={{ color: '#C7BDBF', margin: '5px' }} variant="body2">Explore my latest web projects</Typography>
          <Link href="/project"  sx={{ borderRadius: '10px', textDecoration: 'none', border: '2px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', marginBottom: '10px', marginTop: '1rem', display: 'block',
             '&:hover': { backgroundColor: '#33442c', border: '2px solid #ddd5d0' }, }}>
            See Projects
          </Link>
        </Paper>

        <Paper
          sx={{
            borderRadius: '10px', margin: '10px', padding: '10px', border: '2px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center',
            width: '200px'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              borderBottom: '5px solid #33442c',
              display: 'inline-block',
              width: 'fit-content',
              margin: '0 auto', 
            }}
          >
            Contact Me
          </Typography>
          <Typography style={{ color: '#C7BDBF', margin: '5px' }} variant="body2">Get in touch for opportunities or questions</Typography>
          <Link href="/contact"  sx={{ borderRadius: '10px', textDecoration: 'none', border: '2px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', marginBottom: '10px', marginTop: '1rem', display: 'block',
             '&:hover': { backgroundColor: '#33442c', border: '2px solid #ddd5d0' }, }}>
            Go to Contact
          </Link>
        </Paper>
      </Box>

      {/* Resume Button */}
      {/* <Box sx={{ marginTop: '3rem' }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: '10px', border: '5px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', marginBottom: '10px',
            '&:hover': { backgroundColor: '#33442c', border: '1px solid #ddd5d0' },
          }}
          href="/resume.pdf" // Link to your resume file
        >
          Download Resume
        </Button>
      </Box> */}
    </Paper>
  );
};

export default Home;
