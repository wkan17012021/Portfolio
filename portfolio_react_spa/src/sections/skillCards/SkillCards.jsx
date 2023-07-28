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
        maxWidth: 400,
        mx: "1.5rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {desc}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia component="img" sx={{ width: 100 }} image={icon} alt={alt} />
    </Card>
  );
}
