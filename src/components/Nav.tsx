import { useState } from 'react';
import { Box, Link, Avatar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <List>
        <ListItem button component="a" href="/about">
          <ListItemText primary="ABOUT" />
        </ListItem>
        <ListItem button component="a" href="/project">
          <ListItemText primary="PROJECTS" />
        </ListItem>
        <ListItem button component="a" href="/contact">
          <ListItemText primary="CONTACT" />
        </ListItem>
        <ListItem button component="a" href="/AveryPortSept2024.pdf" target="_blank">
          <ListItemText primary="RESUME" />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      <Box sx={{ backgroundColor: '#1a1b1b', borderBottom: '3px solid #33442c' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ margin: '5px' }} alt="Profile Picture" src="/images/myProject.png" />
            <Link href="/" sx={{ fontFamily: 'Acme', marginLeft: 2, textDecoration: 'none', color: '#EBEBEB' }}>Avery Newhart</Link>
          </Box>

          {/* For mobile screens, show hamburger menu */}
          {isMobile ? (
            <>
              <IconButton onClick={toggleDrawer(true)} sx={{ color: '#EBEBEB' }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {menuItems}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Link href="/about" sx={{ fontFamily: 'Acme', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
                '&:hover': { backgroundColor: '#33442c', border: '1px solid #EBEBEB' }, }} >ABOUT</Link>
              <Link href="/project" sx={{ fontFamily: 'Acme', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
                '&:hover': { backgroundColor: '#33442c', border: '1px solid #EBEBEB' }, }}>PROJECTS</Link>
              <Link href="/contact" sx={{ fontFamily: 'Acme', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
                '&:hover': { backgroundColor: '#33442c', border: '1px solid #EBEBEB' }, }}>CONTACT</Link>
              <Button
                href="/AveryPortSept2024.pdf"
                target="_blank"
                sx={{
                  fontFamily: 'Acme',
                  border: '1px solid #33442c',
                  backgroundColor: '#262726',
                  color: '#EBEBEB',
                  borderRadius: '5px',
                  marginRight: '5px',
                  '&:hover': {
                    backgroundColor: '#33442c',
                    border: '1px solid #EBEBEB',
                  },
                }}
              >
                RESUME
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}


