import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const linkedInIcon = '/images/linkedinPortGreen.png';
const gitHubIcon = '/images/githubPortGreen.png';
const twitterIcon = '/images/twitterPortGreen.png';

const FloatingBar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px', 
        left: '10px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px', 
        padding: '8px', 
        borderRadius: '8px',
        backgroundColor: '#1a1b1b',
        border: '1px solid #33442c', 
        boxShadow: 3,
        zIndex: 1000,
      }}
    >
      <IconButton
        href="https://www.linkedin.com/in/your-linkedin"
        target="_blank"
        aria-label="LinkedIn"
        sx={{ padding: 0 }}
      >
        <img 
          src={linkedInIcon} 
          alt="LinkedIn" 
          style={{ width: '32px', height: '32px' }} 
        />
      </IconButton>
      
      <IconButton
        href="https://github.com/your-github"
        target="_blank"
        aria-label="GitHub"
        sx={{ padding: 0 }}
      >
        <img 
          src={gitHubIcon} 
          alt="GitHub" 
          style={{ width: '32px', height: '32px' }} // Set the size of the custom icon
        />
      </IconButton>
      
      <IconButton
        href="https://twitter.com/your-twitter"
        target="_blank"
        aria-label="Twitter"
        sx={{ padding: 0 }}
      >
        <img 
          src={twitterIcon} 
          alt="Twitter" 
          style={{ width: '32px', height: '32px' }} // Set the size of the custom icon
        />
      </IconButton>
    </Box>
  );
};

export default FloatingBar;


