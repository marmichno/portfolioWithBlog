// styled
import { StyledPostsPaginationContainer } from './StyledBlogPostsPagination';
// mui
import { Typography } from '@mui/material';
// icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BlogPostsPagination = () => {
  return (
    <StyledPostsPaginationContainer>
      <ArrowBackIosIcon />
      <Typography variant="body1" component="p">
        <b>1</b>, 2, 3, 4 ... 426
      </Typography>
      <ArrowForwardIosIcon />
    </StyledPostsPaginationContainer>
  );
};
