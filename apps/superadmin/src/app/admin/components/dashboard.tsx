import { H1 } from '@adminjs/design-system';
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dashboard = () => {
  return (
    <Container>
      <H1 color="red">Custom Dashboard here</H1>
    </Container>
  );
};

export default Dashboard;
