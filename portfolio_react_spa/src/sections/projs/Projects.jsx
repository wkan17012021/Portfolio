import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from "@mui/material/Link";
import Stack from '@mui/material/Stack';
import { projList } from '../../data/projList';



const Projects = () => {
    return ( 
        <section id="proj-section" className="scroll-mt-offset">
          <Container>
                  <Box>
                    <Typography variant="h2" mt={4}  gutterBottom>
        Projects
      </Typography>
        </Box>
          <Stack 
          m={4}
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, sm: 6, md: 12 }}
          alignItems="center"
          justifyContent="center"
          >
            {projList.map(proj => {
                return proj.url ?
                <Link href={proj.url} hrefLang="en" target="_blank" rel="noreferrer" underline="hover" sx={{
                  textUnderlineOffset: '10px',
                  "&:hover": 'color: red',
                }}>
                <Card key={proj.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={proj.img}
                    alt={proj.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div" >
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proj.duration}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
          <Link href={proj.url} hrefLang="en" target="_blank" rel="noreferrer">Go to Project 👉</Link>
        </Button>
                </CardActions>
              </Card></Link>
            :  <Card key={proj.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={proj.img}
                alt={proj.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {proj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proj.duration}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
       Coming Soon
    </Button>
            </CardActions>
          </Card>})} 
          </Stack>
          </Container>
        </section>
     );
}

export default Projects;