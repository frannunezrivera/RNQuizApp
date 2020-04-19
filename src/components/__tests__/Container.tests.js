import React from 'react';
import renderer from 'react-test-renderer';

import { Container, styles } from '../Container';

it('exports a styles object', () => {
  expect(typeof styles).toBe('object');
});


it('renders successfully without children', () => {
  const rendered = renderer.create(<Container>test</Container>);
  // console.log(rendered);
  expect(rendered).toBeTruthy();
});
