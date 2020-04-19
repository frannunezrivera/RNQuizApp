import PropTypes from 'prop-types';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const LoadingOverlay = ({ style }) => {
  const containerStyles = [styles.container];
  if (style) {
    containerStyles.push(style);
  }

  return (
    <View zIndex={100} style={containerStyles}>
      <ActivityIndicator size="large" />
    </View>
  );
};

LoadingOverlay.defaultProps = {
  style: {},
};

LoadingOverlay.propTypes = {
  style: PropTypes.shape(),
};

export default LoadingOverlay;
