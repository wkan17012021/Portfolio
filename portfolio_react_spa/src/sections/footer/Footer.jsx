import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" 
    color="text.secondary" 
    align="center"
    marginBottom={2}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { blob, icons, cartoons } = props;

  return (
    <Box component="footer" sx={{ py: 6, background: 'linear-gradient(#9da9a0, #aed4e6)', clipPath: 'polygon(5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%, 0 5%)'}}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center">
            Thanks for Reading!
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
            Acknowledgments:
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {blob}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {icons}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          gutterBottom
        >
          {cartoons}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  blob: PropTypes.string.isRequired,
    icons: PropTypes.string.isRequired,
  cartoons: PropTypes.string.isRequired,
};

export default Footer;