import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';

export const StyledTechStackContainer = styled(Grid)`
  && {
    width: 100vw;
    height: 100vh;
    background-color: rgba(245, 245, 245, 0.95);
    background-blend-mode: saturation;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
  }
`;

export const StyledTechGridWrapper = styled(Grid)`
  && {
    position: absolute;
    min-width: 800px;
    min-height: 800px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    padding: 1em;
    justify-items: center;
    align-items: center;
    opacity: 0.04;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledCollapsableWrapper = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .MuiPaper-root {
      width: 60%;
      text-align: center;
    }
    .MuiAccordion-root {
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
    .MuiAccordionDetails-root {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    svg {
      width: 50px;
      height: 50px;
      color: #1976d2;
    }

    p {
      max-width: 90%;
    }
  }
`;
