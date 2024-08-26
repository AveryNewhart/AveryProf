import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: '100%', bgcolor: 'background.paper', zIndex: 1300 }}>
      <BottomNavigation sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
        <Box>
          <Link href="/contact" sx={{ marginRight: 2 }}>Contact</Link>
          <Link href="https://github.com/AveryNewhart" sx={{ marginRight: 2 }}>github</Link>
          <Link href="https://www.linkedin.com/in/avery-newhart-0654a9263/" sx={{ marginRight: 2 }}>linkedin</Link>
          <Link href="/about" sx={{ marginRight: 2 }}>twitter</Link>
          <p>make floating icon bar that stays in bottom right for my socials? still should i make this all into one page?</p>
        </Box>
        <IconButton color="primary" onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </IconButton>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
