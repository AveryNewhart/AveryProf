import { useRef } from "react";
import * as emailjs from "@emailjs/browser";
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import Nav from "../components/Nav";
import FloatingBar from "../components/FloatingBar";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_bou8hac",
          "template_3o83xpc",
          form.current,
          "jqm10N66yC4KZBrhY"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Reset the form fields
            form.current?.reset();
          },
          (error) => {
            console.error(error.text);
          }
        );
    }
  };

  return (
    <>
      <Nav />
      <Container maxWidth="sm">
        <Box
          id="contact"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
            mb: 4,
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#1A1B1B',
            border: '5px solid #33442c'
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Acme', textAlign: 'center', color: '#EBEBEB' }}>
            Contact me about any opportunity or suggestion!
          </Typography>
          <form ref={form} onSubmit={sendEmail} style={{ width: '100%', fontFamily: 'Montserrat, sans-serif' }}>
            <Box sx={{ backgroundColor: '#262726' }} mb={3}>
              <TextField
                fullWidth
                label="Name"
                name="user_name"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    "& fieldset": {
                      borderColor: "#33442c"
                    },
                    "&:hover fieldset": {
                      borderColor: "#33442c"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#33442c"
                    }
                  }
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: '#262726' }} mb={3}>
              <TextField
                fullWidth
                label="E-Mail"
                name="user_email"
                type="email"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    "& fieldset": {
                      borderColor: "#33442c"
                    },
                    "&:hover fieldset": {
                      borderColor: "#33442c"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#33442c"
                    }
                  }
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: '#262726' }} mb={3}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    "& fieldset": {
                      borderColor: "#33442c"
                    },
                    "&:hover fieldset": {
                      borderColor: "#33442c"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#33442c"
                    }
                  }
                }}
              />
            </Box>
            <Box textAlign="center">
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                fontFamily: 'Acme',
                border: '3px solid #33442c',
                backgroundColor: '#262726',
                color: '#EBEBEB',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#33442c',
                  border: '3px solid #EBEBEB',
                },
              }}
            >
              Send
            </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <FloatingBar />
    </>
  );
};

export default Contact;


