import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

export default function Nav() {
  return (
    <>
      <Box sx={{ backgroundColor: '#1a1b1b', borderBottom: '3px solid #33442c' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ margin: '5px' }} alt="Profile Picture" src="/images/myProject.png" />
            <Link href="/" sx={{ fontFamily: 'Acme', marginLeft: 2, textDecoration: 'none', color: '#EBEBEB' }}>Avery Newhart</Link>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link href="/contact" sx={{ fontFamily: 'Acme', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
             '&:hover': { backgroundColor: '#33442c', border: '1px solid #EBEBEB' }, }}>CONTACT</Link>
            <Link href="/project" sx={{ fontFamily: 'Acme', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
             '&:hover': { backgroundColor: '#33442c', border: '1px solid #EBEBEB' }, }}>PROJECTS</Link>
            <Link href="/about" sx={{ fontFamily: 'Acme', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#EBEBEB', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
             '&:hover': { backgroundColor: '#33442c', border: '1px solid #EBEBEB' }, }} >ABOUT</Link>
            <Button
            href="/AveryPortSept2024.pdf" 
            target="_blank"
            sx={{
              fontFamily: 'Acme',
              border: '1px solid #33442c',
              backgroundColor: '#262726',
              color: '#EBEBEB',
              borderRadius: '10px',
              marginRight: '5px',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '1px solid #EBEBEB',
              },
            }}>RESUME</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

