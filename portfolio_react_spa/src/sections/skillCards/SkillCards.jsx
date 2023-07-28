import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SkillCards(props) {
  const { title, desc, icon, alt } = props;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: 400,
        mx: "1.5rem",
        p: "0.75rem",
      }}
    >
      <Box>
        <CardContent>
          <Typography component="h3" variant="h3" sx={{ fontSize: '1.2rem'}}>
            {title}
          </Typography>
          <Typography
            variant="p"
            color="text.secondary"
            component="p"
          >
            {desc}
          </Typography>
        </CardContent>
      </Box>
      <Box>
          <CardMedia 
        component="img" sx={{ maxWidth: '80px'}} image={icon} alt={alt} />
      </Box>
    </Card>
  );
}
