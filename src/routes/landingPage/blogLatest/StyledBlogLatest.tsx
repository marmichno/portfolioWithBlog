import styled from 'styled-components';
// mui
import { Grid, Typography } from '@mui/material';

export const StyledBlogLatestContainer = styled(Grid)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(245, 245, 245, 0.95);
  background-blend-mode: saturation;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
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
  height: 50%;
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

export const StyledCardsWrapper = styled(Grid)`
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    color: red;
  }

  .MuiPaper-root {
    margin: 1em;
  }

  button {
    margin: 1em;
  }

  .MuiCardsActions-root {
    && {
      align-items: space-between;
    }
  }
`;
