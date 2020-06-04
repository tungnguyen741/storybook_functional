import { action } from '@storybook/addon-actions';
import InputSearch from './InputSearch';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 

storiesOf('InputSearch', module)
  .add(
    'default',
    () => (
      <InputSearch/>
    )
  );







 