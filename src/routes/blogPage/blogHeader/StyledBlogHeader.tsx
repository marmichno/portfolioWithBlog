import styled from 'styled-components';
import { Grid } from '@mui/material';
// images
import headerBg from '../../../resources/images/background.png';

export const StyledBlogHeaderContainer = styled(Grid)`
  && {
    width: 100vw;
    height: 45vh;
    background-image: url(${headerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(245, 245, 245, 0.95);
    background-blend-mode: saturation;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    hr {
      width: 15%;
      margin: 1em;
      border: none;
      height: 2px;
      background-color: blue;
    }

    p {
      max-width: 500px;
    }
  }
`;
