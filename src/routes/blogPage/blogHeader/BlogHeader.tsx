// styled
import { StyledBlogHeaderContainer } from './StyledBlogHeader';
// mui
import { Typography } from '@mui/material';

export const BlogHeader = () => {
  return (
    <StyledBlogHeaderContainer>
      <Typography variant="h2" component="h2">
        Your Blog title here.
      </Typography>
      <hr></hr>
      <Typography variant="body1" component="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos omnis
        magnam, ducimus possimus atque esse.
      </Typography>
    </StyledBlogHeaderContainer>
  );
};
