import React from 'react';

import { Container, TextInput } from './styles';

const TextBox: React.FC = () => {
    return (
        <Container>
        <form>
                <TextInput>
            <input placeholder="WhatsApp?" />
          </TextInput>
            <button>Text</button>
            </form>
      </Container>
    );
};

export default TextBox;
