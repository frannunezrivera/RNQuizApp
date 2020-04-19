import PropTypes from 'prop-types';
import React from 'react';
import { Text as EText } from 'react-native-elements';
import styles from './styles';

const Text = ({ children, style }) => {
  const textStyle = Object.assign({}, styles.text, style);

  return (
    <EText style={textStyle}>{children}</EText>
  );
};

Text.defaultProps = {
  style: {},
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(),
};

export default Text;
