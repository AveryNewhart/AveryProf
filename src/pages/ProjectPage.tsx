// import React from 'react';
import Nav from '../components/Nav';
import Carousel from 'react-material-ui-carousel';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Box from '@mui/joy/box';
import { Paper, Button } from '@mui/material';
import { projectItems } from '../assets/projects';

const Project = () => {
    return (
        <>
            <Nav />
            <Box sx={{ mx: 'auto', width: '90%' }}>
                <h1 style={{ textAlign: 'center' }}>Projects</h1>
                <Carousel
                    next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                    prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                >
                    {projectItems.map((item, i) => (
                        <Paper key={i}>
                            <img src={item.photo} alt={item.title} style={{ width: '100%', height: 'auto', alignContent: 'center' }} />
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
            <Box component="section" sx={{ mx: 'auto', width: '75%' }} style={{ border: '1px solid red', marginTop: '25px', textAlign: 'center' }}>
              <h3>Current Projects Section</h3>
              <p>description area to describe my current projects</p>
            </Box>
        </>
    );
};

export default Project;
