import React from 'react';

import { Container, Header, PageInfo } from './styles';
import TextBox from '../TextBox';

const Feed: React.FC = () => {
    return (
        <Container>
        <Header>
                <PageInfo>
            <strong>Home</strong>
          </PageInfo>
          </Header>
            <TextBox />
      </Container>
    );
};

export default Feed;
