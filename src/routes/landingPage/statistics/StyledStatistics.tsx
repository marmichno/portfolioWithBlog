import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';
// image
import bgImage from '../../../resources/images/background.png';

export const StyledStatisticsContainer = styled(Grid)`
  && {
    width: 100vw;
    height: 30vh;
    background-color: #1976d2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
  }
`;

export const StyledBackgroundWrapper = styled(Grid)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: 50%;
  background-position: bottom;
  opacity: 0.1;
`;

export const StyledCardsWrapper = styled(Grid)`
  && {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const StyledCard = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;

    svg {
      width: 100px;
      height: 100px;
      color: white;
      margin-bottom: 1em;
    }

    h4 {
      color: white;
    }
  }
`;
