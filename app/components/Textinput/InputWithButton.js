import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );
  const containerStyle = [styles.container];

  if (!editable) {
    containerStyle.push(styles.containerDisable);
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
InputWithButton.defaultProps = {
  editable: true,
};

InputWithButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  editable: PropTypes.bool,
};

export default InputWithButton;
