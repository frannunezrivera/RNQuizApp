import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const PrimaryButton = (props) => {
  const { loading, buttonStyle } = props;
  if (loading) {
    return (
      <Button
        large
        {...props}
        buttonStyle={[styles.primaryButton, buttonStyle && buttonStyle]}
        disabled={props.loading}
        title=""
      />
    );
  }

  return (
    <Button
      large
      {...props}
      buttonStyle={[styles.primaryButton, buttonStyle && buttonStyle]}
    />
  );
};

PrimaryButton.defaultProps = {
  buttonStyle: {},
  loading: false,
};

PrimaryButton.propTypes = {
  buttonStyle: PropTypes.shape(),
  loading: PropTypes.bool,
};

export default PrimaryButton;
