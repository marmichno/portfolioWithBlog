import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledBlogSubscribeContainer = styled(Grid)`
  && {
    width: 100vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1976d2;
    color: white;
    text-align: center;

    p {
      max-width: 600px;
      padding: 1em;
    }
  }
`;

export const SubscribeActionWrapper = styled(Grid)`
  display: flex;

  input {
    min-width: 250px;
  }

  button {
    margin-left: 2em;
  }
`;
