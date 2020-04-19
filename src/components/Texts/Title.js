import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native-elements';

const Title = (props) => {
  const { children } = props;

  return (
    <Text h4>{children}</Text>
  );
};

Title.defaultProps = {};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
