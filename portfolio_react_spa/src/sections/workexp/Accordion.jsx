import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accordionEntry from '../../data/workExp';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
  return (
    <section className='work-exp-container'>
       <Accordion disabled>
        <AccordionSummary>
          <Typography>Tech Experience</Typography>
        </AccordionSummary>
      </Accordion>
      {accordionEntry.techJobs.map(job => {
        return (
          <Accordion expanded={expanded === job.panelNum} onChange={handleChange(`${job.panelNum}`)}>
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
          <Typography>Non-Tech Experience</Typography>
        </AccordionSummary>
      </Accordion>
      {accordionEntry.nonTechjobs.map(job => {
        return (
          <Accordion expanded={expanded === job.panelNum} onChange={handleChange(`${job.panelNum}`)}>
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