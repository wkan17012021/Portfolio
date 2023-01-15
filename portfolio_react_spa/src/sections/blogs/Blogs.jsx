import * as React from "react";
import Box from "@mui/material/Box";
import { imageListItemClasses } from "@mui/material/ImageListItem";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 480,
      desktop: 768,
      wide: 1200,
    },
  },
});

export default function Blogs(blogData) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "450",
          display: "grid",
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
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
          <div key={item._id}>
            <a
              href={`https://the-dog-can-blog.hashnode.dev/${item.slug}`}
              hrefLang="en"
              target='_blank'
            >
              <h3>{item.title}</h3>
              <img
                src={item.coverImage}
                alt="random cover image for blog article"
              />
              <p>{item.brief}</p>
            </a>
          </div>
        ))}
      </Box>
    </ThemeProvider>
  );
}
