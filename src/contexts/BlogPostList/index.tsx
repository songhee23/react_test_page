import { createContext, useState } from 'react';
import mockPosts from 'mock/posts.json';
import { useEffect } from 'react';

interface Context {
  readonly postList: ReadonlyArray<Post>;
  readonly onAdd: (post: Post) => void;
  readonly onDelete: (post: Post) => void;
}

const PostListContext = createContext<Context>({
  postList: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  onAdd: (): void => {},
  onDelete: (): void => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly thumbnail: string;
  readonly site: string;
}

const PostListContextProvider = ({ children }: Props) => {
  const [postList, setPostList] =  useState<ReadonlyArray<Post>>([]);

  //console.log("PostListContextProvider rendering"); // Check if this logs

  useEffect(() => {
    // console.log("Loading posts:", mockPosts); // Check if posts are loaded
    setPostList(mockPosts);
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시 한 번만 실행되도록 함

  const onDelete = (post: Post) => {
    setPostList(postList.filter((item) => item !== post));
  };

  const onAdd = (post: Post) => {
    // console.log("onAdd", post)
    setPostList([...postList, post]);
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        onAdd,
        onDelete,
      }}>
      {children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListContextProvider };
