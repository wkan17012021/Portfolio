import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendBtn from "../../utils/SendBtn";

export default function FormPropsTextFields() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
      const contactSection = document.getElementById("contact-section");
      /* To offset .scroll-mt-offset scroll css property. Take the contact section element height, calculate a fraction of its height and add to the scrollY */

      const mql = window.matchMedia("(max-width: 500px)");
      const x = contactSection.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = contactSection.getBoundingClientRect().height;
      let variableScroll;
      let y;

      if (mql.matches) {
        variableScroll = sectionHeight / 2; // desktop 
        y = x + variableScroll;
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      } else {
        variableScroll = sectionHeight / 3; // mobile
        y = x + variableScroll;
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <Container 
    id="contact-section"
    className="scroll-mt-offset"
    sx={{m: '2rem auto' }}
    >
      <Box>
        <Typography  variant="h2" mt={3} gutterBottom>
          Reach out to Me
        </Typography>
        <Box>
          {success && (
            <Typography variant="body1" mt={3} gutterBottom>
              Thanks for your message! I aim to respond within 48 hours 🙏🏽
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        autoComplete="off"
        name="contact-form"
        method="POST"
        action="/?success=true"
        data-netlify="true"
      >
        <div>
          <input type="hidden" name="form-name" value="contact-form" />
          <TextField
            required
            id="name-required"
            label="Full Name"
            name="Full Name"
            placeholder="Please enter Full Name"
            variant="filled"
            color="primary"
            sx={{
              input: {
                 color: '#FFF',
                 fontWeight: 'bold',
                 "&::placeholder": {
                    opacity: 1,
                    fontWeight: 'bold'
                 },
              },
              label: { color: '#FFF', fontWeight: 'bold' }
           }}
          />
          <TextField
            required
            id="email-required"
            label="Email Address"
            name="Email Address"
            placeholder="Please enter email address"
            variant="filled"
            type={"email"}
            sx={{
              input: {
                 color: '#FFF',
                 fontWeight: 'bold',
                 "&::placeholder": {
                    opacity: 1,
                    fontWeight: 'bold'
                 },
              },
              label: { color: '#FFF', fontWeight: 'bold' }
           }}
          />
          <TextField
            required
            id="body-txt-required"
            label="Comments or Suggestions"
            name="Comments or Suggestions"
            multiline
            rows={5}
            variant="filled"
            sx={{

              input: {
                 color: '#FFF',
                 fontWeight: 'bold',
                 "&::placeholder": {
                    opacity: 1,
                    fontWeight: 'bold',
                    color: '#FFF',
                 },
              },
              label: { color: '#FFF', fontWeight: 'bold' }
           }}
          />
          <SendBtn />
        </div>
      </Box>
    </Container>
  );
}
