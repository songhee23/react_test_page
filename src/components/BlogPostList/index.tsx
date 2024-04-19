import { useContext } from 'react';
import styled from '@emotion/styled';
import { BlogPost } from 'components/BlogPost';
import { PostListContext } from 'contexts/BlogPostList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogPostList = () => {
    const { postList } = useContext(PostListContext);
    console.log(postList);
    
    return (
      <Container> 
        {postList.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body}/>
        ))}
      </Container>
    );
  };
  