import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

const BasicForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1},
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
      <Typography 
      id="contact-section" 
      variant="h3" 
      mt={3}  
      gutterBottom 
      >Reach out to Me
      </Typography>
      <p class="hidden">
        <label>
          Do not fill this out if you are human:{" "}
          <input
            type="text"
            aria-label="Do not fill this out if you are human"
            name="bot-field"
          />
        </label>
      </p>
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
