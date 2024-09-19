import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

export default function Nav() {
  return (
    <>
      <Box sx={{ backgroundColor: '#1a1b1b', borderBottom: '1px solid #33442c' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ margin: '5px' }} alt="Profile Picture" src="/images/myProject.png" />
            <Link href="/" sx={{ fontFamily: 'Montserrat, sans-serif', marginLeft: 2, textDecoration: 'none', color: '#ddd5d0' }}>Avery Newhart</Link>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link href="/contact" sx={{ fontFamily: 'Montserrat, sans-serif', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
             '&:hover': { backgroundColor: '#33442c', border: '1px solid #ddd5d0' }, }}>Contact</Link>
            <Link href="/project" sx={{ fontFamily: 'Montserrat, sans-serif', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
             '&:hover': { backgroundColor: '#33442c', border: '1px solid #ddd5d0' }, }}>Projects</Link>
            <Link href="/about" sx={{ fontFamily: 'Montserrat, sans-serif', marginRight: 2, border: '1px solid #33442c', backgroundColor: '#262726', color: '#ddd5d0', textDecoration: 'none', padding: '6.5px', borderRadius: '5px',
             '&:hover': { backgroundColor: '#33442c', border: '1px solid #ddd5d0' }, }} >About</Link>
            <Button  sx={{
              border: '1px solid #33442c',
              backgroundColor: '#262726',
              color: '#ddd5d0',
              borderRadius: '10px',
              marginRight: '5px',
              '&:hover': {
                backgroundColor: '#33442c',
                border: '1px solid #ddd5d0',
              },
            }}>resume(download)</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

