import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
  width: 800px;

  @media (max-width: 768px) { // 태블릿 사이즈
    width: 600px;
    margin: 10px;
  }

  @media (max-width: 576px) { // 모바일 사이즈
    width: 90%;
    padding: 10px;
    margin: 10px auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
  }
`;

const Thumbnail = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Site = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface Props {
  readonly thumbnail: string;
  readonly site: string;
}

export const BlogPost = ({ thumbnail, site }: Props) => {
  return (
    <Container>
      <Thumbnail>{thumbnail}</Thumbnail>
      <Site>{site}</Site>
    </Container>
  );
};
