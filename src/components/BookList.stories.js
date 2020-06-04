import { action } from '@storybook/addon-actions';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BookList from './BookList';

storiesOf('BookList', module)
  .add(
    'default',
    () => (
      <BookList/>
    )
  );
