import * as React from "react";
import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendBtn from "../../utils/SendBtn";


export default function FormPropsTextFields() {
const [success, setSuccess] = useState(false);

useEffect(() => {
  if(window.location.search.includes('success=true')) {
    setSuccess(true);
  }
}, []);


  return (
    <Container>
      <Box>
        <Typography id="contact-section" variant="h3" mt={3} gutterBottom>
        Reach out to Me
      </Typography>
      <Box>
      {
        success && (
          <Typography variant="body1" mt={3} gutterBottom>
            Thanks for your message! I aim to respond with 48 hours. 🙏🏽
          </Typography>
        )
      }
      </Box>
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      name="contact-form"
      method="POST"
      action="/success=true"
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
        />
         <TextField
          required
          id="email-required"
          label="Email Address"
          name="Email Address"
          placeholder="Please email address"
          variant="filled"
        />
        <TextField
          required
          id="body-txt-required"
          label="Comments or Suggestions"
          name="Comments or Suggestions"
          multiline
          rows={5}
          placeholder="Please provide your query or comments here"
          variant="filled"
        />
        <SendBtn type="submit"/>
      </div>
    </Box>
    </Container>
  );
}