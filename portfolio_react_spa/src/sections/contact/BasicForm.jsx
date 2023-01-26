import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Label } from "@mui/icons-material";

export default function FormPropsTextFields() {
  return (
    <Container>
      <Box>
        <Typography id="contact-section" variant="h3" mt={3} gutterBottom>
        Reach out to Me
      </Typography>
      <Typography sx={{ display: "none" }}>
        <Label>Do not fill this out if you are human: </Label>
        <TextField
          aria-label="Do not fill this out if you are human"
          name="bot-field"
        ></TextField>
      </Typography>

      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="name-required"
          label="Full Name"
          placeholder="Please enter Full Name"
          variant="filled"
          color="primary"
        />
         <TextField
          required
          id="email-required"
          label="Email Address"
          placeholder="Please email address"
          variant="filled"
        />
        <TextField
          required
          id="body-txt-required"
          label="Comments or Suggestions"
          multiline
          rows={5}
          placeholder="Please provide your query or comments here"
          variant="filled"
        />
      </div>
    </Box>
    </Container>
  );
}