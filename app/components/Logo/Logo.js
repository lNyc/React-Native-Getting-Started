import React from 'react';
import {
  View, Image, ImageBackground, Text,
} from 'react-native';

import baseImage from './images/background.png';
import logoImage from './images/logo.png';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground resizeMode="contain" source={baseImage} style={styles.containerImage}>
      <Image resizeMode="contain" style={styles.logo} source={logoImage} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
