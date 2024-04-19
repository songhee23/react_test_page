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
    // console.log(postList);
    // 역순으로 리스트를 보여주기 위해 reverse() 함수 사용
    const reversedPostList = [...postList].reverse();
    return (
      <Container> 
        {reversedPostList.map((post) => (
          <BlogPost key={post.id} thumbnail={post.thumbnail} site={post.site}/>
        ))}
      </Container>
    );
  };
  