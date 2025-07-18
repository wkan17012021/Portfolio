import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {workExp} from "../../data/workExp";

export default function WorkExpAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section
      id="work-exp-section"
      className="scroll-mt-offset"
    >
      <Container 
      sx={{marginBottom: 6}}>
        <Box>
           <Typography variant="h2" mt={4} gutterBottom>
          Work Experience
        </Typography>
        </Box>
        <Accordion 
        disabled>
          <AccordionSummary
          >
            <Typography 
            variant="h3"
            sx={{color: '#FFF' }}
            >Tech </Typography>
          </AccordionSummary>
        </Accordion>
        {workExp.techJobs.map((job) => {
          return (
            <Accordion
              key={job.id}
              expanded={expanded === job.panelNum}
              onChange={handleChange(`${job.panelNum}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={job.ariaControls}
                id={job.panelNum}
              >
                <Typography sx={{ width: "40%", flexShrink: 0 }}>
                  {job.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", marginLeft: 6}}>
                  {job.year}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                 style={{ whiteSpace: "pre-line", verticalAlign: "bottom" }}
                >{job.body}</Typography>
                <Link href={job.projLink} underline="hover" target="_blank" rel="noopener">Read about a Project Here</Link>
              </AccordionDetails>
            </Accordion>
          );
        })}
        <Accordion disabled>
          <AccordionSummary>
            <Typography 
            variant="h3"
            sx={{color: '#FFF' }}
            >Non-Tech </Typography>
          </AccordionSummary>
        </Accordion>
        {workExp.nonTechjobs.map((job) => {
          return (
            <Accordion
              key={job.id}
              expanded={expanded === job.panelNum}
              onChange={handleChange(`${job.panelNum}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={job.ariaControls}
                id={job.panelNum}
              >
                <Typography sx={{ width: "40%", flexShrink: 0 }}>
                  {job.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", marginLeft: 6 }}>
                  {job.year}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                 style={{ whiteSpace: "pre-line", verticalAlign: "bottom" }}
                >{job.body}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </section>
  );
}
