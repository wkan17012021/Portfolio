import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from "@mui/material/Link";
import { imageListItemClasses } from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 480,
      desktop: 768,
      wide: 1200,
    },
  },
  typography : {
    h2: {
      fontSize: 'clamp(2rem, 3rem, 3.6rem)',
      fontFamily: 'El Messiri, Iowan Old Style',
      fontWeight: 600
    },
}})

export default function Blogs(blogData) {
  return (
    <ThemeProvider theme={theme}>
        <Box>
          <Typography variant="h2" mt={3}  gutterBottom>
        Blog
      </Typography>
        </Box>
      <Container
        sx={{
          height: "500",
          display: "grid",
          marginBottom: 6,
          gridTemplateColumns: {
            mobile: "1fr",
            tablet: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)",
            wide: "repeat(4, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {blogData.blogs.map((item) => (
          <Link
          hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href={`https://the-dog-can-blog.hashnode.dev/${item.slug}`}>
              <Card sx={{ maxWidth: 345, margin: '0.5rem' }}>
              <CardMedia
                component="img"
                alt="random cover image for blog article"
                height="200"
                image={item.coverImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.brief}
                </Typography>
              </CardContent>
            </Card>
            </Link>
        ))}
      </Container>
    </ThemeProvider>
  );
}
