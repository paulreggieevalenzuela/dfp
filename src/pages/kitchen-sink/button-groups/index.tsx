import User from '@carbon/icons-react/lib/User';
import React, { useState } from 'react';

import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const [textSelected, setTextSelected] = useState(0);
  const [iconSelected, setIconSelected] = useState(0);

  return (
    <KitchenSinkLayout>
      <TitleBar title='Button Group' description='' />
      <Container>
        <section className='mb-5'>
          <ButtonGroup>
            <Button
              selected={textSelected === 1}
              onClick={() => setTextSelected(1)}
            >
              Button
            </Button>
            <Button
              selected={textSelected === 2}
              onClick={() => setTextSelected(2)}
            >
              Button
            </Button>
            <Button
              selected={textSelected === 3}
              onClick={() => setTextSelected(3)}
            >
              Button
            </Button>
          </ButtonGroup>
        </section>
        <section>
          <ButtonGroup>
            <Button
              selected={iconSelected === 1}
              onClick={() => setIconSelected(1)}
            >
              <User />
            </Button>
            <Button
              selected={iconSelected === 2}
              onClick={() => setIconSelected(2)}
            >
              <User />
            </Button>
            <Button
              selected={iconSelected === 3}
              onClick={() => setIconSelected(3)}
            >
              <User />
            </Button>
          </ButtonGroup>
        </section>
        <section></section>
      </Container>
    </KitchenSinkLayout>
  );
}
