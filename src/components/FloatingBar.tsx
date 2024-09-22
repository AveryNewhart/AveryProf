import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

// Custom icon paths
const linkedInIcon = '/images/linkedinPortGreen.png';
const gitHubIcon = '/images/githubPortGreen.png';
const twitterIcon = '/images/twitterPortGreen.png';

const FloatingBar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px', // Keep it at the bottom
        left: '10px', // Move it to the left side
        display: 'flex',
        flexDirection: 'column', // Vertical layout
        alignItems: 'center',
        gap: '8px', // Smaller gap between icons
        padding: '8px', // Reduce padding to make it smaller
        borderRadius: '8px',
        backgroundColor: '#1a1b1b', // Background color
        border: '1px solid #33442c', // Border color
        boxShadow: 3,
        zIndex: 1000, // Ensure it's on top of everything
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
          style={{ width: '32px', height: '32px' }} // Set the size of the custom icon
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


