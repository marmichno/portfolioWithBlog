// styled
import { StyledBlogPostsContainer } from './StyledBlogPosts';
// components
import { PostCard } from './postCard/PostCard';

export const BlogPosts = () => {
  return (
    <StyledBlogPostsContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </StyledBlogPostsContainer>
  );
};
