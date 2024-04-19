import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { useContext, useState } from 'react';
import { PostListContext } from 'contexts/BlogPostList';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.2rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface Props {
  readonly onClose?: () => void;
}

export const Form = ({ onClose }: Props) => {
  const { onAdd } = useContext(PostListContext);
  const [thumbnail, setThumbnail] = useState('');
  const [site, setSite] = useState('');

  const registerPost = () => {
    if (thumbnail === '' || site === '') return;
    onAdd({
      id:0, userId:0, thumbnail: thumbnail, site:site
    })   
    if (typeof onClose === 'function') onClose();
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title>글 등록</Title>
        <InputGroup>
          <Label>Thumbnail: </Label>
          <Input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}/>
        </InputGroup>
        <InputGroup>
          <Label>Site: </Label>
          <Input value={site} onChange={(e) => setSite(e.target.value)}/>
        </InputGroup>
        <Actions>
          <Button label="등록하기" onClick={registerPost} />
          <Button label="닫기" color="#304FFE" onClick={onClose}/>
        </Actions>
      </Contents>
    </Container>
  );
};
