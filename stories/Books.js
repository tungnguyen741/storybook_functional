import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Books from '../src/components/Books';


storiesOf('Books', module)
  .add(
    'default',
    () => (
      <Books />
    )
  );

 
