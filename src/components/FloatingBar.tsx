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
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        zIndex: 1000, // Ensure it's on top of everything
      }}
    >
      <IconButton
        href="https://www.linkedin.com/in/your-linkedin"
        target="_blank"
        aria-label="LinkedIn"
        sx={{ color: '#0e76a8' }}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://github.com/your-github"
        target="_blank"
        aria-label="GitHub"
        sx={{ color: '#171515' }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://twitter.com/your-twitter"
        target="_blank"
        aria-label="Twitter"
        sx={{ color: '#1DA1F2' }}
      >
        <TwitterIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default FloatingBar;
