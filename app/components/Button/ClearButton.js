import React from 'react';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import srcImage from './images/icon.png';
import styles from './styles';

const ClearButton = (props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image resizeMode="contain" style={styles.icon} source={srcImage} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
ClearButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
export default ClearButton;
