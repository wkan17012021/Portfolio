import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const projList = [
    {
        id: 1,
        title: 'Road Less Travelled',
        duration: '2021 - Present',
        url: 'https://theroadlesstravelled.netlify.app/',
        img: 'src/assets/rlt_placeholder.webp',
        alt: 'placeholder image of Road Less Travelled Project: geologically themed travel website'
    },
    {
        id: 2,
        title: 'Pool Club',
        duration: '2023 - Present',
        img: 'src/assets/pool_placeholder.webp',
        alt: 'placeholder image of swimming pool'
    }
]

const Projects = () => {
    return ( 
        <section>
            <h2>Projects</h2>
            {projList.map(proj => {
                return proj.url ?
                <Card key={proj.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={proj.img}
                    alt={proj.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proj.duration}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
          <a href={proj.url} hrefLang="en" target="_blank">Share</a>
        </Button>
                </CardActions>
              </Card>
            :  <Card key={proj.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={proj.img}
                alt={proj.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
        </section>
     );
}

export default Projects;