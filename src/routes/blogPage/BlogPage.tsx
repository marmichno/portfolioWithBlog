// components
import { BlogHeader } from './blogHeader/BlogHeader';
import { BlogPostsCategories } from './blogPostsCategories/BlogPostsCategories';
import { BlogPosts } from './blogPosts/BlogPosts';
import { BlogPostsPagination } from './blogPostsPagination/BlogPostsPagination';
import { BlogSubscribe } from './blogSubscribe/BlogSubscribe';

export const BlogPage = () => {
  return (
    <>
      <BlogHeader />
      <BlogPostsCategories />
      <BlogPosts />
      <BlogPostsPagination />
      <BlogSubscribe />
    </>
  );
};
