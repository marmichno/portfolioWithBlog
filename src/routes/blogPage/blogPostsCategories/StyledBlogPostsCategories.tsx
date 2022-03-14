import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledBlogPostsCategoriesContainer = styled(Grid)`
  && {
    width: 100vw;
    height: 20vh;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 10%;
    padding-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    hr {
      width: 100%;
      height: 2px;
      background-color: blue;
      margin-top: 1em;
    }
  }
`;

export const StyledButtonsWrapper = styled(Grid)`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      margin-right: 1em;
    }
  }
`;
