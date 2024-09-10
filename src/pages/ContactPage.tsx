import { useRef } from "react";
import * as emailjs from "@emailjs/browser";
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import Nav from "../components/Nav";
// import Footer from "../components/Footer";
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
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center' }}>
            Contact me about any opportunity or suggestion!
          </Typography>
          <form ref={form} onSubmit={sendEmail} style={{ width: '100%' }}>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Name"
                name="user_name"
                variant="outlined"
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="E-Mail"
                name="user_email"
                type="email"
                variant="outlined"
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                required
              />
            </Box>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <FloatingBar />
      {/* <Footer /> */}
    </>
  );
};

export default Contact;

