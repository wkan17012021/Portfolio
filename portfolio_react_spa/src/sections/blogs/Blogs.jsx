import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from "@mui/material/Link";
import imageListItemClasses from "@mui/material/ImageListItem";
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
      fontFamily: 'ElMessiri, Iowan Old Style',
      fontWeight: 700
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
          display: "grid",
          marginBottom: 6,
          gridTemplateColumns: {
            mobile: "1fr",
            tablet: "1fr",
            desktop: "repeat(auto-fill, minmax(384px, 1fr))",
            wide: "repeat(3, 1fr)",
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
              <Card component={"article"} sx={{ margin: '0.5rem' }}>
              <CardMedia
                component="img"
                alt="random cover image for blog article"
                width="264"
                height="200"
                image={item.coverImage}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom fontFamily={'ElMessiri'} fontSize={'1.8rem'} variant="h3">
                  {item.title}
                </Typography>
                <Typography variant="body" color="text.secondary" fontFamily={'AlegreyaSans'} fontSize={'1rem'} letterSpacing={'1.2px'}>
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
