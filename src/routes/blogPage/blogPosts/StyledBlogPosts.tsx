import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledBlogPostsContainer = styled(Grid)`
  width: 100vw;
  padding-left: 15%;
  padding-right: 15%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 450px;
  grid-gap: 2em;
`;
