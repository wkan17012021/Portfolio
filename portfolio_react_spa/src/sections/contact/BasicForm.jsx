import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Label } from "@mui/icons-material";

const BasicForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        marginTop: 6, 
        marginBottom: 6,
      }}
      noValidate
      autoComplete="off"
      method="POST"
      name="general-contact"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      onSubmit="submit"
    >
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
      <div>
        <TextField
          required
          error
          id="name-field"
          label="Required"
          helperText="Incorrect entry. Please try again"
          variant="filled"
          name="name-field"
        />
      </div>
      <div>
        <TextField
          required
          error
          id="email-field"
          label="Required"
          helperText="Incorrect entry. Please try again"
          variant="filled"
          name="email-field"
        />
      </div>
      <div>
        <TextField
          required
          error
          multiline
          rows={4}
          id="query-field"
          label="Required"
          helperText="Incorrect entry. Please try again"
          variant="filled"
          name="query-field"
        />
      </div>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Send</button>
    </Box>
  );
};

export default BasicForm;
