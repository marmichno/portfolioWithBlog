import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';
// images
import bgImage from '../../../resources/images/background.png';
import heroAvatar from '../../../resources/images/heroAvatar.png';

export const StyledHeroContainer = styled(Grid)`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: contain;
  background-position: center;
  background-color: rgba(245, 245, 245, 0.95);
  background-blend-mode: saturation;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
`;

export const StyledHeaderWrapper = styled(Grid)`
  max-width: 490px;

  h2 {
    margin-bottom: 1em;
  }
`;

export const StyledImageWrapper = styled(Grid)`
  width: 600px;
  height: 600px;
  background-color: #1976d2;
  border-radius: 58% 42% 60% 40% / 34% 59% 41% 66%;
  background-image: url(${heroAvatar});
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const StyledButtonWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  margin-top: 2em;

  button {
    margin-right: 1em;
  }
`;
