import { action } from '@storybook/addon-actions';
import Header from './Header';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 

storiesOf('Header', module)
  .add(
    'default',
    () => (
      <Header/>
    )
  );
