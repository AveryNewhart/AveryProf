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
        animation: 'gradientMove 10s ease infinite',
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
        backgroundSize: '200% 200%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          position: 'relative',
        }}
      >
        {/* Image box */}
        <Box
          sx={{
            width: { xs: '150px', sm: '200px' }, 
            height: { xs: '150px', sm: '200px' }, 
            backgroundImage: 'url(/images/profCenter.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            zIndex: 1,
          }}
        />
        {/* Text Section */}
        <Box
          sx={{
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',
            border: '5px solid #33442c',
            backgroundColor: '#262726',
            color: '#EBEBEB',
            textAlign: 'center',
            zIndex: 2,
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Acme',
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', sm: '2.5rem' },
            }}
          >
            Hello, I am Avery
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: '1rem',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              color: '#DDD5D0',
            }}
          >
            Air Force Veteran turned passionate full-stack web developer
          </Typography>
        </Box>
      </Box>

      {/* Navigation Boxes */}
      <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Paper
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',
            border: '2px solid #33442c',
            backgroundColor: '#262726',
            textAlign: 'center',
            width: { xs: '100%', sm: '200px' }, 
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Acme',
              borderBottom: '5px solid #33442c',
              display: 'inline-block',
              width: 'fit-content',
              margin: '0 auto',
              color: '#EBEBEB',
            }}
          >
            Learn More
          </Typography>
          <Typography style={{ color: '#DDD5D0', margin: '5px' }} variant="body2">
            Discover more about my journey
          </Typography>
          <Link
            href="/about"
            sx={{
              fontFamily: 'Acme',
              borderRadius: '10px',
              textDecoration: 'none',
              border: '2px solid #33442c',
              backgroundColor: '#262726',
              color: '#EBEBEB',
              marginBottom: '10px',
              marginTop: '1rem',
              display: 'block',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '2px solid #EBEBEB',
              },
            }}
          >
            More About Me
          </Link>
        </Paper>

        <Paper
          sx={{
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',
            border: '2px solid #33442c',
            backgroundColor: '#262726',
            textAlign: 'center',
            width: { xs: '100%', sm: '200px' },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Acme',
              borderBottom: '5px solid #33442c',
              display: 'inline-block',
              width: 'fit-content',
              margin: '0 auto',
              color: '#EBEBEB',
            }}
          >
            View Projects
          </Typography>
          <Typography style={{ color: '#DDD5D0', margin: '5px' }} variant="body2">
            Explore my latest web projects
          </Typography>
          <Link
            href="/project"
            sx={{
              fontFamily: 'Acme',
              borderRadius: '10px',
              textDecoration: 'none',
              border: '2px solid #33442c',
              backgroundColor: '#262726',
              color: '#EBEBEB',
              marginBottom: '10px',
              marginTop: '1rem',
              display: 'block',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '2px solid #EBEBEB',
              },
            }}
          >
            See Projects
          </Link>
        </Paper>

        <Paper
          sx={{
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',
            border: '2px solid #33442c',
            backgroundColor: '#262726',
            textAlign: 'center',
            width: { xs: '100%', sm: '200px' },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Acme',
              borderBottom: '5px solid #33442c',
              display: 'inline-block',
              width: 'fit-content',
              margin: '0 auto',
              color: '#EBEBEB',
            }}
          >
            Contact Me
          </Typography>
          <Typography style={{ color: '#DDD5D0', margin: '5px' }} variant="body2">
            Get in touch for opportunities or questions
          </Typography>
          <Link
            href="/contact"
            sx={{
              fontFamily: 'Acme',
              borderRadius: '10px',
              textDecoration: 'none',
              border: '2px solid #33442c',
              backgroundColor: '#262726',
              color: '#EBEBEB',
              marginBottom: '10px',
              marginTop: '1rem',
              display: 'block',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '2px solid #EBEBEB',
              },
            }}
          >
            Go to Contact
          </Link>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Home;

