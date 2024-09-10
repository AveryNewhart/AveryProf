// import React from 'react';
import Nav from '../components/Nav';
import Carousel from 'react-material-ui-carousel';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Box from '@mui/joy/box';
import { Paper, Button } from '@mui/material';
import { projectItems } from '../assets/projects';
import FloatingBar from '../components/FloatingBar';

const Project = () => {
    return (
        <>
            <Nav />
            <Box sx={{ mx: 'auto', width: '90%' }}>
                <h1 style={{ textAlign: 'center' }}>Projects</h1>
                <Carousel
                    autoPlay={false}  // Disable auto scrolling
                    next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                    prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                >
                    {projectItems.map((item, i) => (
                        <Paper key={i}>
                            <img 
                                src={item.photo} 
                                alt={item.title} 
                                style={{ 
                                    width: '500px',  
                                    height: '300px', 
                                    objectFit: 'cover',  
                                    display: 'block',    // Ensures no inline whitespace
                                    margin: '0 auto'     
                                }} 
                            />
                            <div style={{ textAlign: 'center' }}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h3>Skills</h3>
                                <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    {item.skills.map((skill, index) => (
                                        <p key={index}  style={{ margin: '5px' }}>
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h4>Links</h4>
                                <Button
                                    variant="contained"
                                    startIcon={<OpenInNew />}
                                    href={item.github}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<OpenInNew />}
                                    href={item.liveSite}
                                >
                                    Live Site
                                </Button>
                            </div>
                        </Paper>
                    ))}
                </Carousel>

            </Box>
            <Box component="section" sx={{ mx: 'auto', width: '75%' }} style={{ border: '1px solid white', marginTop: '25px', textAlign: 'center' }}>
              <h3>Currently Working On</h3>
              <p>I’m actively working on a variety of projects, each offering a unique challenge and opportunity to expand my development skills</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                  <Box sx={{ margin: '5px', border: '1px solid #ccc', backgroundColor: 'rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '2px', textAlign: 'center', padding: '2px' }}>
                    <Box component="h4" sx={{ marginBottom: '2px', fontWeight: 'bold' }}>Pool Business Website</Box>
                    <p>A professional business site for a client's pool cleaning service, designed to showcase services, provide contact information, and improve their online presence.</p>
                    <p>Vue, React, and Material UI </p>
                  </Box>
                </li>
                <li>
                  <Box sx={{ margin: '5px', border: '1px solid #ccc', backgroundColor: 'rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '2px', textAlign: 'center', padding: '2px' }}>
                    <Box component="h4" sx={{ marginBottom: '2px', fontWeight: 'bold' }}>BetReady</Box>
                    <p>A comprehensive sports app focusing on live scores, news, and in-depth data for sports enthusiasts. This app caters to the sports betting community by offering probability percentages for bets, helping users make informed decisions.</p>
                    <p>Turbo repo, Next, Typescript, and Mantine </p>
                  </Box>
                </li>
                <li>
                  <Box sx={{ margin: '5px', border: '1px solid #ccc', backgroundColor: 'rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '2px', textAlign: 'center', padding: '2px' }}>
                    <Box component="h4" sx={{ marginBottom: '2px', fontWeight: 'bold' }}>Golf Course Finder</Box>
                    <p>A web app initially developed for Lancaster County that provides users with a seamless experience to find golf courses, view rates, and access relevant information all on one page. I’m currently working to scale it for users across the United States.</p>
                    <p>Vue, TypeScript, and Tailwind </p>
                  </Box>
                </li>
              </ul>
              <Button  href="https://github.com/AveryNewhart" target="_blank" >View Github</Button>
            </Box>
            <FloatingBar />
        </>
    );
};

export default Project;
