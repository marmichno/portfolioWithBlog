import {
  StyledBlogPostsCategoriesContainer,
  StyledButtonsWrapper,
} from './StyledBlogPostsCategories';
// mui
import { Button } from '@mui/material';

export const BlogPostsCategories = () => {
  return (
    <StyledBlogPostsCategoriesContainer>
      <StyledButtonsWrapper>
        <Button variant="outlined" size="large">
          frontend
        </Button>
        <Button variant="outlined" size="large">
          backend
        </Button>
        <Button variant="outlined" size="large">
          places
        </Button>
        <Button variant="outlined" size="large">
          hobbies
        </Button>
      </StyledButtonsWrapper>
      <hr></hr>
    </StyledBlogPostsCategoriesContainer>
  );
};
