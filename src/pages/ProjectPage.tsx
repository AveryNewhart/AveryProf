// import React from 'react';
import Nav from '../components/Nav';
import Carousel from 'react-material-ui-carousel';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Box from '@mui/joy/box';
import { Button } from '@mui/material';
import { projectItems } from '../assets/projects';
import FloatingBar from '../components/FloatingBar';

const Project = () => {
    return (
        <>
            <Nav />
            <Box sx={{ mx: 'auto', width: '90%' }}>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', color: '#ddd5d0' }}>Projects</h1>
                <Carousel
                    autoPlay={false}  // Disable auto scrolling
                    next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                    prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                    sx={{ fontFamily: 'Montserrat, sans-serif', border: '3px solid #33442c', backgroundColor: '#1a1b1b', color: '#ddd5d0', borderRadius: '5px', margin: '10px' }}
                >
                    {projectItems.map((item, i) => (
                        <Box key={i} >
                            <img 
                                src={item.photo} 
                                alt={item.title} 
                                style={{ 
                                    width: '500px',  
                                    height: '300px', 
                                    objectFit: 'cover',  
                                    display: 'block', 
                                    margin: '0 auto',
                                    borderRadius: '5px'     
                                }} 
                            />
                             <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center' }} >
                                <h2 style={{ margin: '5px' }}>{item.title}</h2>
                                <p>{item.description}</p>
                            </Box>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'center',
                                margin: '10px 0'
                            }}>
                                <Box sx={{ 
                                    borderRadius: '10px', 
                                    padding: '10px', 
                                    border: '3px solid #33442c', 
                                    backgroundColor: '#262726', 
                                    color: '#ddd5d0', 
                                    textAlign: 'center', 
                                    display: 'inline-block',
                                }} >
                                    <h3 style={{ margin: '5px' }}>Skills</h3>
                                    <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        {item.skills.map((skill, index) => (
                                            <p key={index} style={{ margin: '5px' }}>
                                                {skill}
                                            </p>
                                        ))}
                                    </div>
                                </Box>
                            </Box>
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ margin: '5px' }}>Links</h4>
                                <Button
                                    variant="contained"
                                    startIcon={<OpenInNew />}
                                    href={item.github}
                                    sx={{
                                      border: '3px solid #33442c',
                                      backgroundColor: '#262726',
                                      color: '#ddd5d0',
                                      borderRadius: '10px',
                                      marginRight: '2.5px',
                                      '&:hover': {
                                        backgroundColor: '#33442c',
                                        border: '1px solid #ddd5d0',
                                      },
                                    }}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<OpenInNew />}
                                    href={item.liveSite}
                                    sx={{
                                      border: '3px solid #33442c',
                                      backgroundColor: '#262726',
                                      color: '#ddd5d0',
                                      borderRadius: '10px',
                                      marginLeft: '2.5px',
                                      '&:hover': {
                                        backgroundColor: '#33442c',
                                        border: '1px solid #ddd5d0',
                                      },
                                    }}
                                >
                                    Live Site
                                </Button>
                            </div>
                        </Box>
                    ))}
                </Carousel>

            </Box>
            <Box component="section" sx={{ mx: 'auto', width: '75%' }} style={{ border: '5px solid #33442c', marginTop: '25px', textAlign: 'center', backgroundColor: '#1a1b1b', borderRadius: '5px',  }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', color: '#ddd5d0' }}>Currently Working On</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', color: '#C7BDBF' }}>I’m actively working on a variety of projects, each offering a unique challenge and opportunity to expand my development skills</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center' }} >
                    <Box component="h4" sx={{ borderBottom: '3px solid #33442c', margin: '5px', fontWeight: 'bold', color: '#ddd5d0' }}>Pool Business Website</Box>
                    <p style={{ color: '#C7BDBF' }}>A professional business site for a client's pool cleaning service, designed to showcase services, provide contact information, and improve their online presence.</p>
                    <h4 style={{ margin: '2px' }}>Skills</h4>
                    <p style={{ color: '#C7BDBF' }}>React, TypeScript, and Material UI </p>
                </Box>
                </li>
                <li>
                <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center' }} >
                    <Box component="h4" sx={{ borderBottom: '3px solid #33442c', margin: '5px', fontWeight: 'bold', color: '#ddd5d0' }}>BetReady</Box>
                    <p style={{ color: '#C7BDBF' }}>A comprehensive sports app focusing on live scores, news, and in-depth data for sports enthusiasts. This app caters to the sports betting community by offering probability percentages for bets, helping users make informed decisions.</p>
                    <h4 style={{ margin: '2px' }}>Skills</h4>
                    <p style={{ color: '#C7BDBF' }}>Turbo repo, Next, Typescript, and Mantine </p>
                  </Box>
                </li>
                <li>
                <Box sx={{  borderRadius: '10px', margin: '10px', padding: '10px', border: '3px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textAlign: 'center' }} >
                    <Box component="h4" sx={{ borderBottom: '5px solid #33442c', margin: '5px', fontWeight: 'bold', color: '#ddd5d0' }}>Golf Course Finder</Box>
                    <p style={{ color: '#C7BDBF' }}>A web app initially developed for Lancaster County that provides users with a seamless experience to find golf courses, view rates, and access relevant information all on one page. I’m currently working to scale it for users across the United States.</p>
                    <h4 style={{ margin: '2px' }}>Skills</h4>
                    <p style={{ color: '#C7BDBF' }}>Vue, TypeScript, and Tailwind </p>
                  </Box>
                </li>
              </ul>
              <Button  href="https://github.com/AveryNewhart" target="_blank"  sx={{
              border: '3px solid #33442c',
              backgroundColor: '#262726',
              color: '#ddd5d0',
              borderRadius: '10px',
              marginBottom: '10px',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '3px solid #ddd5d0',
              },
            }}
          >View Github</Button>
            </Box>
            <FloatingBar />
        </>
    );
};

export default Project;
