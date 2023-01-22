import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import workExp from '../../data/workExp';

export default function WorkExpAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
  return (
    <section id="work-exp-section" className='work-exp-container croll-mt-offset'>
       <Typography variant="h2" mt={3}  gutterBottom>
        Work Experience
      </Typography>
       <Accordion disabled>
        <AccordionSummary>
          <Typography variant="h3">Tech Experience</Typography>
        </AccordionSummary>
      </Accordion>
      {workExp.techJobs.map(job => {
        return (
          <Accordion key={job.id} expanded={expanded === job.panelNum} onChange={handleChange(`${job.panelNum}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={job.ariaControls}
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
           {job.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{job.year}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {job.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
        )
      })}
      <Accordion disabled>
        <AccordionSummary>
          <Typography variant="h3">Non-Tech Experience</Typography>
        </AccordionSummary>
      </Accordion>
      {workExp.nonTechjobs.map(job => {
        return (
          <Accordion key={job.id} expanded={expanded === job.panelNum} onChange={handleChange(`${job.panelNum}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={job.ariaControls}
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
           {job.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{job.year}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {job.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
        )
      })}

    </section>
  );
}