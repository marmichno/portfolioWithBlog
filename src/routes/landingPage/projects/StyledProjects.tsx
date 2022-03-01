import styled from 'styled-components';
// mui
import { Grid, Paper } from '@mui/material';
import { Masonry } from '@mui/lab';

export const StyledProjectsContainer = styled(Grid)`
  && {
    width: 100vw;
    background-color: rgba(245, 245, 245, 0.95);
    background-blend-mode: saturation;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-left: 10%;
    padding-right: 10%;
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
