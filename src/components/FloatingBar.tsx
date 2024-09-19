import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

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
        sx={{ color: '#0e76a8', fontSize: 'small' }} // Smaller icon size
      >
        <LinkedInIcon fontSize="medium" /> {/* Adjust icon size */}
      </IconButton>
      <IconButton
        href="https://github.com/your-github"
        target="_blank"
        aria-label="GitHub"
        sx={{ color: '#171515', fontSize: 'small' }}
      >
        <GitHubIcon fontSize="medium" />
      </IconButton>
      <IconButton
        href="https://twitter.com/your-twitter"
        target="_blank"
        aria-label="Twitter"
        sx={{ color: '#1DA1F2', fontSize: 'small' }}
      >
        <TwitterIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default FloatingBar;

