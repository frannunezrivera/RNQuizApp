import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const SecondaryButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.secondaryButton}
  >
    <Text style={styles.secondaryButtonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SecondaryButton;
