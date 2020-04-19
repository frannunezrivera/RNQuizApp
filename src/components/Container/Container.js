import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

const Container = (
  {
    scroll,
    children,
    style,
    scrollStyle,
  },
) => {
  let containerStyles = styles.container;
  let scrollContainerStyles = styles.scrollContainer;

  if (scroll === true) {
    if (style) {
      scrollContainerStyles = Object.assign({}, scrollContainerStyles, style);
    }

    return (
      <ScrollView style={scrollStyle} contentContainerStyle={scrollContainerStyles}>
        {children}
      </ScrollView>
    );
  }

  if (style) {
    containerStyles = Object.assign({}, containerStyles, style);
  }

  return (
    <View style={containerStyles}>
      {children}
    </View>
  );
};

Container.defaultProps = {
  scroll: false,
  style: {},
  scrollStyle: {},
};

Container.propTypes = {
  scroll: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(),
  scrollStyle: PropTypes.shape(),
};

export default Container;
