import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  /* eslint-disable no-underscore-dangle */
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={item._id} item={item} index={index} />
    ));
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
