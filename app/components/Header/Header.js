import { TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ImageSrc from './images/gear.png';
import styles from './styles';

const Header = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} resizeMode="contain" source={ImageSrc} />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Header;
