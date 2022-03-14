import styled from 'styled-components';
// mui
import { Grid, Paper } from '@mui/material';
import { Masonry } from '@mui/lab';
// bg
import bgImage from '../../../resources/images/background2.png';

export const StyledProjectsContainer = styled(Grid)`
  && {
    width: 100vw;
    background-color: rgba(245, 245, 245, 0.9);
    background-image: url(${bgImage});
    background-size: contain;
    background-position: center;
    background-blend-mode: saturation;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 5%;
  }
`;

export const StyledMasonryWrapper = styled(Masonry)`
  && {
  }
`;

export const StyledItem = styled(({ bg, ...otherProps }) => (
  <Paper {...otherProps} />
))`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    transition: all ease-in-out 0.5s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const StyledTextItem = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 20%;
  flex-direction: column-reverse;

  h2 {
    max-width: 80%;
  }

  svg {
    height: 80px;
    width: 80px;
    color: #1976d2;
  }
`;
