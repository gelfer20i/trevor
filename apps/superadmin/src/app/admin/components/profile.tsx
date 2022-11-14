import React from 'react';
import { H1, H3 } from '@adminjs/design-system';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router';
import {
  ActionHeader,
  ActionProps,
  AddNoticeProps,
  ApiClient,
  useTranslation,
  withNotice,
} from 'adminjs';

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

const Profile: React.FC<ActionProps & AddNoticeProps & RouteComponentProps> = (
  props
) => {
  const { resource, records, action, addNotice, history } = props;
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    console.log('heyyy');
    console.log(props);
    // const recordIds = records.map((r) => r.id);
    // setDescription(recordIds);
  }, []);

  return (
    <Container>
      <H1 color="red">Custom Page...</H1>
      <Canvas>
        <H3 color="red">{description}</H3>
      </Canvas>
    </Container>
  );
};

export default Profile;
