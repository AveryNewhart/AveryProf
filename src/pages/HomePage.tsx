// import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Paper, Button } from '@mui/material';

const Home = () => {
    return (
    <>
      <Paper>
        <Box>photo Box</Box>
        <Box>
          <h3>hello i am avery line</h3>
          <p>1-2 power sentence Box</p>
        </Box>
        <Box>
          in this section, make these nicely styled boxes under the popping content of the photo, name, and power senteces
          <Link href="/contact" sx={{ marginRight: 2 }}>Contact me!</Link>
          <Link href="/project" sx={{ marginRight: 2 }}>View projects </Link>
          <Link href="/about" sx={{ marginRight: 2 }}>Learn more (icon) </Link>
          <Button>resume</Button>
      </Box>
      </Paper>
    </>
    )
  }
  
  export default Home