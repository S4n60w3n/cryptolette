import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../components/Button'

storiesOf('components/button', module).add('default', () => (
  <Button onClick={action('OnClick')}>Button</Button>
))
