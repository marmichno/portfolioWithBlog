import styled from 'styled-components';
// mui
import { Grid, Typography, Paper } from '@mui/material';
// img
import bgImage from '../../../resources/images/background.png';

export const StyledBlogLatestContainer = styled(Grid)`
  width: 100vw;
  background-color: rgba(245, 245, 245, 0.9);
  background-image: url(${bgImage});
  background-size: contain;
  background-position: center;
  background-blend-mode: saturation;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  padding-bottom: 0;
`;

export const StyledBackground = styled(Grid)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
  }
`;

export const StyledBackgroundTextWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledBackgroundText = styled(Typography)`
  && {
    font-size: 12vw;
    opacity: 0.03;
    letter-spacing: 50px;
  }
`;

export const StyledVerticalWrapper = styled(Paper)`
  && {
    background-color: #1976d2;
    padding: 1em;

    h2 {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      color: white;
      letter-spacing: 0.2em;
    }
  }
`;

export const StyledCardsWrapper = styled(Grid)`
  && {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    hr {
      width: 15%;
      height: 3px;
      background-color: #1976d2;
      border: none;
      margin: 1em;
    }

    svg {
      color: red;
    }

    .MuiCardHeader-root {
      padding: 0;
    }

    .MuiGrid-root {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .MuiPaper-root {
      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      & img {
        width: 50%;
        object-fit: cover;
      }
    }

    button {
      margin: 1em;
    }

    .MuiCardContent-root {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      p {
        max-width: 80%;
      }
    }

    .MuiCardActions-root {
      margin-bottom: 1em;
      button {
        margin: 0;
      }
    }
  }
`;

export const StyledCardContentWrapper = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
