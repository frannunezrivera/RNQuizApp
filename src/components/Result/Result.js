import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import styles from './styles';

const Result = ({ title, subtitle, correct }) => {
  const style = correct ? styles.correct : styles.wrong;
  const icon = correct ? { name: 'check', type: 'font-awesome' } : { name: 'times', type: 'font-awesome' };

  return (
    <ListItem
      title={title}
      subtitle={subtitle}
      leftAvatar={(
        <Avatar
          size="small"
          icon={icon}
          overlayContainerStyle={style}
        />
      )}
    />
  );
};

Result.defaultProps = {};

Result.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
};

export default Result;
