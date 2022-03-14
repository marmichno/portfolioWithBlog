import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';
// img
import contactMe from '../../../resources/images/contactMe.png';
import bgImage from '../../../resources/images/background3.png';

export const StyledContactMeContainer = styled(Grid)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(245, 245, 245, 0.95);
  background-image: url(${bgImage});
  background-size: contain;
  background-position: center;
  background-blend-mode: saturation;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
`;

export const StyledImageWrapper = styled(Grid)`
  width: 700px;
  height: 700px;
  background-image: url(${contactMe});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const StyledContactWrapper = styled(Grid)`
  && {
    margin-top: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledContactDataWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1em;

  svg {
    margin-right: 1em;
    height: 70px;
    width: 70px;
    color: #1976d2;
  }
`;
