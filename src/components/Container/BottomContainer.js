import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const BottomContainer = (
  {
    children,
    style,
  },
) => {
  let containerStyles = styles.bottomContainer;

  if (style) {
    containerStyles = Object.assign({}, containerStyles, style);
  }

  return (
    <View style={containerStyles}>
      {children}
    </View>
  );
};

BottomContainer.defaultProps = {
  style: {},
};

BottomContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(),
};

export default BottomContainer;
