import React from 'react';
import { H1, H3, Button, Label, Input, Icon, H6 } from '@adminjs/design-system';
import styled from 'styled-components';
import { BasePropertyProps, ApiClient } from 'adminjs';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Canvas = styled('div')`
  max-width: 30rem;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
`;

const Profile = () => {
  const [description, setDescription] = React.useState<
    {
      id: string;
      title: string;
    }[]
  >([]);

  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleView = (): void => {
    const api = new ApiClient();
    setLoading(true);
    api
      .searchRecords({ resourceId: 'Chat', query: '' })
      .then((response) => {
        setLoading(false);
        console.log(response);
        const data: { id: string; title: string }[] = [];
        response.forEach((item) =>
          data.push({ id: item.id, title: item.title })
        );
        setDescription(data);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const handleAdd = (): void => {
    if (title.length <= 0) {
      setError(true);
      return;
    }
    const api = new ApiClient();
    setLoading(true);
    setError(false);
    api
      .resourceAction({
        data: {
          title: title,
        },
        resourceId: 'Chat',
        actionName: 'new',
      })
      .then((response) => {
        setLoading(false);
        setTitle('');
        alert('successfully added. Please click the view button.');
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        throw error;
      });
  };

  return (
    <Container>
      <H1 color="red">Custom Page...</H1>
      {description.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: 20,
          }}
        >
          <H6>ID: {item.id}</H6>
          <H6 color="red">Title: {item.title}</H6>
        </div>
      ))}
      <Canvas>
        <Button variant="primary" size="lg" onClick={handleView}>
          View all chat items
        </Button>
      </Canvas>
      <Label>Please type in a new chat title...</Label>
      <Input value={title} onChange={(e: any) => setTitle(e.target.value)} />
      <Canvas>
        <Button variant="primary" size="lg" onClick={handleAdd}>
          {loading ? <Icon icon="Fade" spin /> : null}
          Add
        </Button>
      </Canvas>
      {error && <H3 color="red">Error: Field is empty...</H3>}
    </Container>
  );
};

export default Profile;
