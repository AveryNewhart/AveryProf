import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Paper, Button } from '@mui/material';

export default function Nav() {
  return (
    <>
      <Paper style={{ borderBottom: '1px solid yellow' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <p>small photo here</p>
            <Link href="/" sx={{ marginLeft: 2 }}>Avery Newhart</Link>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link href="/contact" sx={{ marginRight: 2 }}>Contact</Link>
            <Link href="/project" sx={{ marginRight: 2 }}>Projects</Link>
            <Link href="/about" sx={{ marginRight: 2 }}>About</Link>
            <Button>resume</Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

