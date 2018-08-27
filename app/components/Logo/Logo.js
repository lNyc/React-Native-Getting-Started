import React, { Component } from 'react';
import {
  View, Text, Animated, StyleSheet, Platform, Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ANIMATION_DURATION = 500;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerImageSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }

  componentDidMount() {
    const name = Platform === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
    this.keyboardDidShowListener.remove();
  }

  keyboardWillShow = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardWillHide = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const { containerImageWidth, imageWidth } = this.state;
    const { tintColor } = this.props;

    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth },
    ];

    const imageStyles = [
      styles.logo,
      {
        width: imageWidth,
      },
      tintColor ? { tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

Logo.defaultProps = {
  tintColor: null,
};

export default Logo;
