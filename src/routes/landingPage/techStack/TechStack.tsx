// styled
import {
  StyledTechStackContainer,
  StyledTechGridWrapper,
  StyledCollapsableWrapper,
} from './StyledTechStack';
// mui
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
// timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
// icons
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiMaterialui } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { DiSass } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
// hooks
import { useState } from 'react';

export const TechStack = () => {
  return (
    <StyledTechStackContainer>
      <StyledTechGridWrapper>
        <FaReact style={{ color: '#5ED3F3' }} />
        <SiTypescript style={{ color: '#2F74C0' }} />
        <SiStyledcomponents style={{ color: 'black' }} />
        <SiMaterialui style={{ color: '#007BF7' }} />
        <SiJest style={{ color: '#944058' }} />
        <DiSass style={{ color: '#C76494' }} />
        <IoLogoJavascript style={{ color: '#EFD81D' }} />
        <SiCss3 style={{ color: '#314CDC' }} />
        <AiFillHtml5 style={{ color: '#D46D31' }} />
      </StyledTechGridWrapper>
      <StyledCollapsableWrapper>
        <Typography variant="h2" component="span">
          Tech
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Build five non commercial projects.
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <SiTypescript />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" component="span">
                2022
              </Typography>
              <Typography>
                materialUi, react-hook-form, redux-thunk, basics of
                react-native.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Build nine non commercial projects.
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <FaReact style={{ color: '#5ED3F3' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" component="span">
                2021
              </Typography>
              <Typography>
                typeScript, react, browser router, toastify, framer motion,
                axios , Redux, formik, yup, react testing library, SASS with BEM
                notation and CSS modules, npm, git, jest.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Build three commercial projects.
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <IoLogoJavascript style={{ color: '#EFD81D' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" component="span">
                2020
              </Typography>
              <Typography>
                HTML, CSS, javaScript, fetch API, postman, chartJS.
              </Typography>
              <Typography>finish two courses:</Typography>
              <Typography>- responsive web design</Typography>
              <Typography>- data structures and algorithms.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        {/* <Accordion expanded={collapse2022} onChange={handleChange(2022)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography variant="h3" component="h3">
              2022:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="p">
              Learn: materialUi, react-hook-form, redux-thunk, basics of
              react-native.
            </Typography>
            <Typography>- build five non commercial projects.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={collapse2021} onChange={handleChange(2021)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography variant="h3" component="h3">
              2021:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="p">
              Learn: typeScript, react, browser router, toastify, framer motion,
              axios , Redux, formik, yup, react testing library, SASS with BEM
              notation and CSS modules, npm, git, jest.
            </Typography>
            <Typography>- build nine non commercial projects.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={collapse2020} onChange={handleChange(2020)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography variant="h3" component="h3">
              2020:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="p">
              Learn: HTML, CSS, javaScript, fetch API, postman, chartJS.
            </Typography>
            <Typography>
              - finish two courses: responsive web design, data structures and
              algorithms.
            </Typography>
            <Typography>- build three non commercial projects.</Typography>
          </AccordionDetails>
        </Accordion> */}
      </StyledCollapsableWrapper>
    </StyledTechStackContainer>
  );
};
