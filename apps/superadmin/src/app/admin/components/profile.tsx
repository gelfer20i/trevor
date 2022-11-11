import { H1, H3 } from '@adminjs/design-system';
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Canvas = styled('div')`
  max-width: 30rem;
  background-color: pink;
  border-radius: 20px;
  padding: 20px;
`;

const Profile: React.FC = () => {
  return (
    <Container>
      <H1 color="red">Custom Page!!!!!</H1>
      <Canvas>
        <H3 color="red">Welcome y'all</H3>
      </Canvas>
    </Container>
  );
};

export default Profile;
