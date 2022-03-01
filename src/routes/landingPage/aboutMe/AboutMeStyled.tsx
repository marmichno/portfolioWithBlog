import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
// images
import aboutMeAvatarr from '../../../resources/images/aboutmeAvatarr.png';

export const StyledAboutMeContainer = styled(Grid)`
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

export const StyledImageWrapper = styled(Grid)`
  width: 700px;
  height: 700px;
  background-image: url(${aboutMeAvatarr});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledTextWrapper = styled(Grid)`
  && {
    max-width: 500px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 5em;
  }

  p {
    padding: 2em;
  }

  hr {
    background-color: #1976d2;
    height: 3px;
    width: 30%;
  }
`;
