// import React from 'react';
import Nav from '../components/Nav';
import Carousel from 'react-material-ui-carousel';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Box from '@mui/joy/box';
import { Button } from '@mui/material';
import { projectItems } from '../assets/projects';
import FloatingBar from '../components/FloatingBar';

const backendProjects = [
    {
        title: 'Social Network Backend',
        github: 'https://github.com/AveryNewhart/Social-Network-Backend',
    },
    {
        title: 'E-Commerce Backend',
        github: 'https://github.com/AveryNewhart/E-Commerce-Site',
    },
];

const Project = () => {
    return (
        <>
            <Nav />
            <Box 
                sx={{ 
                    mx: 'auto', 
                    width: { xs: '95%', sm: '90%', md: '80%' },
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'column',
                }}
            >
              <h1 style={{ fontFamily: 'Acme', textAlign: 'center', color: '#EBEBEB', marginBottom: '0'}}>PROJECTS</h1>
              <Box sx={{   display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                mx: 'auto',
                width: '100%',
                height: '100vh',
                overflowY: 'auto',
                marginTop: '-20px' }}>
                <Carousel
                    autoPlay={false}
                    sx={{ 
                        fontFamily: 'Montserrat, sans-serif', 
                        border: '3px solid #33442c', 
                        backgroundColor: '#1a1b1b', 
                        color: '#EBEBEB', 
                        borderRadius: '5px', 
                        width: '100%', 
                        // maxWidth: '700px', // Restricting the max width to 700px
                        margin: { xs: '5px', sm: '10px' },
                        position: 'relative',
                        overflowY: 'auto',
                    }}
                >
                    {projectItems.map((item, i) => (
                        <Box 
                            key={i} 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                padding: '10px',
                            }}
                        >
                            <img 
                                src={item.photo} 
                                alt={item.title} 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '500px',  // Adjusted to prevent oversizing 
                                    height: 'auto', 
                                    objectFit: 'cover', 
                                    borderRadius: '5px', 
                                    marginBottom: '10px'
                                }}
                                loading="lazy"
                            />
                            <Box 
                                sx={{ 
                                    borderRadius: '10px', 
                                    padding: '10px', 
                                    border: '3px solid #33442c', 
                                    backgroundColor: '#262726', 
                                    color: '#EBEBEB', 
                                    textAlign: 'center',
                                    fontSize: { xs: '14px', sm: '16px' },
                                    width: '100%', 
                                    maxWidth: '900px'
                                }}
                            >
                                <h2 style={{ fontFamily: 'Acme', margin: '5px' }}>{item.title}</h2>
                                <p>{item.description}</p>
                            </Box>

                            {item.title === 'BACKEND PROJECTS' ? (
                                <Box sx={{ textAlign: 'center' }}>
                                    <h4 style={{ fontFamily: 'Acme', margin: '5px' }}>Backend Projects</h4>
                                    {backendProjects.map((project, index) => (
                                        <Button
                                            key={index}
                                            target='_blank'
                                            variant="contained"
                                            startIcon={<OpenInNew />}
                                            href={project.github}
                                            sx={{
                                                fontFamily: 'Acme', 
                                                border: '3px solid #33442c',
                                                backgroundColor: '#262726',
                                                color: '#EBEBEB',
                                                borderRadius: '10px',
                                                margin: '5px',
                                                '&:hover': {
                                                    backgroundColor: '#33442c',
                                                    border: '1px solid #EBEBEB',
                                                },
                                            }}
                                        >
                                            {project.title} GitHub
                                        </Button>
                                    ))}
                                </Box>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <h4 style={{ fontFamily: 'Acme', margin: '5px' }}>LINKS</h4>
                                    <Button
                                        variant="contained"
                                        startIcon={<OpenInNew />}
                                        href={item.github}
                                        sx={{
                                            fontFamily: 'Acme', 
                                            border: '3px solid #33442c',
                                            backgroundColor: '#262726',
                                            color: '#EBEBEB',
                                            borderRadius: '10px',
                                            marginRight: '2.5px',
                                            '&:hover': {
                                                backgroundColor: '#33442c',
                                                border: '1px solid #EBEBEB',
                                            },
                                        }}
                                    >
                                        GITHUB
                                    </Button>
                                    {item.liveSite && (
                                        <Button
                                            variant="contained"
                                            startIcon={<OpenInNew />}
                                            href={item.liveSite}
                                            sx={{
                                                fontFamily: 'Acme', 
                                                border: '3px solid #33442c',
                                                backgroundColor: '#262726',
                                                color: '#EBEBEB',
                                                borderRadius: '10px',
                                                marginLeft: '2.5px',
                                                '&:hover': {
                                                    backgroundColor: '#33442c',
                                                    border: '1px solid #EBEBEB',
                                                },
                                            }}
                                        >
                                            LIVE SITE
                                        </Button>
                                    )}
                                </div>
                                
                            )}
                        </Box>
                        
                    ))}
                </Carousel>
                </Box>
            </Box>
            <Box component="section" sx={{ mx: 'auto', width: '75%' }} style={{ fontFamily: 'Montserrat, sans-serif', border: '5px solid #33442c', marginTop: '25px', textAlign: 'center', backgroundColor: '#1a1b1b', borderRadius: '5px',  }}>
              <h3 style={{ fontFamily: 'Acme', textAlign: 'center', color: '#EBEBEB' }}>CURRENTLY WORKING ON</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', color: '#DDD5D0' }}>I’m actively working on a variety of projects, each offering a unique challenge and opportunity to expand my development skills</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textAlign: 'center' }} >
                    <h3 style={{ fontFamily: 'Acme', borderBottom: '3px solid #33442c', margin: '5px', fontWeight: 'bold', color: '#EBEBEB' }}>POOL BUSINESS</h3>
                    <p style={{ color: '#DDD5D0' }}>A professional business site for a client's pool cleaning service, designed to showcase services, provide contact information, and improve their online presence.</p>
                    <h4 style={{ fontFamily: 'Acme', margin: '2px' }}>SKILLS</h4>
                    <p style={{ color: '#DDD5D0', marginTop: '3px' }}>React, TypeScript, and Material UI </p>
                </Box>
                </li>
                <li>
                <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textAlign: 'center' }} >
                    <h3 style={{ fontFamily: 'Acme', borderBottom: '3px solid #33442c', margin: '5px', fontWeight: 'bold', color: '#EBEBEB' }}>BETREADY</h3>
                    <p style={{ color: '#DDD5D0' }}>A comprehensive sports app focusing on live scores, news, and in-depth data for sports enthusiasts. This app caters to the sports betting community by offering probability percentages for bets, helping users make informed decisions.</p>
                    <h4 style={{ fontFamily: 'Acme', margin: '2px' }}>SKILLS</h4>
                    <p style={{ color: '#DDD5D0', marginTop: '3px' }}>Turbo repo, Next, Typescript, and Mantine </p>
                  </Box>
                </li>
                <li>
                <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textAlign: 'center' }} >
                    <h3 style={{ fontFamily: 'Acme', borderBottom: '5px solid #33442c', margin: '5px', fontWeight: 'bold', color: '#EBEBEB' }}>GOLF COURSE FINDER</h3>
                    <p style={{ color: '#DDD5D0' }}>A web app initially developed for Lancaster County that provides users with a seamless experience to find golf courses, view rates, and access relevant information all on one page. I’m currently working to scale it for users across the United States.</p>
                    <h4 style={{ fontFamily: 'Acme', margin: '2px' }}>SKILLS</h4>
                    <p style={{ color: '#DDD5D0', marginTop: '3px' }}>Vue, TypeScript, and Tailwind </p>
                  </Box>
                </li>
              </ul>
              <Button  href="https://github.com/AveryNewhart" target="_blank"  sx={{
              fontFamily: 'Acme', 
              border: '3px solid #33442c',
              backgroundColor: '#262726',
              color: '#EBEBEB',
              borderRadius: '10px',
              marginBottom: '10px',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '3px solid #EBEBEB',
              },
            }}
          >VIEW GITHUB</Button>
            </Box>
            <FloatingBar />
        </>
    );
};

export default Project;
