import React from 'react';

import { Container, Form, Box } from './styles';

const TextBox: React.FC = () => {
    return (
        <Container>
        <Form>
                <Box>
            <input placeholder="WhatsApp?" />

            <button>Text</button>
          </Box>
            </Form>
      </Container>
    );
};

export default TextBox;
