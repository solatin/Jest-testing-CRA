'use strict';

import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

// The first time toMatchSnapshot is run, Jest creates a snapshot file. 
// On subsequent test runs, Jest will compare the rendered output with the previous snapshot. If they match, the test will pass
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Link>Facebook</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

// toMatchInlineSnapshot is similar to toMatchSnapshot, except the snapshot values are written automatically back into the source code.
it('properly escapes quotes', () => {
  const tree = renderer
    .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="#"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  "Facebook" \\'is \\ 'awesome'
</a>
`);
});

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});