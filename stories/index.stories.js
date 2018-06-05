import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { BusyIndicator, Footer, Field } from '../src/client/components';

storiesOf('BusyIndicator', module)
  .add('load data', () => <BusyIndicator show="true" />)
  .add('received data', () => <BusyIndicator show="false" />);

storiesOf('Footer', module)
  .add('show Footer', () => <Footer />);

storiesOf('Field', module)
  .add('show Field', withInfo('doc string about Field component')(() => <Field name="field" defaultValue="" onChange={action('onChange')} />))
  .add('show Field like a date', () => <Field type='date' name='dateStart' defaultValue="" onChange={action('onChange')} />)
  .add('show Field like a date with min and max value', () => <Field type='date' name='dateStart' min='2018-05-28' max='2018-07-01' defaultValue='' onChange={action('onChange')} />);