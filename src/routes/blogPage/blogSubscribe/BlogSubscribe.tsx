// styled
import {
  StyledBlogSubscribeContainer,
  SubscribeActionWrapper,
} from './StyledBlogSubscribe';
// mui
import { Typography, Button, TextField } from '@mui/material';

export const BlogSubscribe = () => {
  return (
    <StyledBlogSubscribeContainer>
      <Typography variant="h2" component="h2">
        Subscribe Blog for latest updates
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        officia expedita necessitatibus corrupti tempora voluptas.
      </Typography>
      <SubscribeActionWrapper>
        <TextField
          id="standard-basic"
          label="enter your email here..."
          variant="standard"
        />
        <Button variant="contained">Subscribe</Button>
      </SubscribeActionWrapper>
    </StyledBlogSubscribeContainer>
  );
};
