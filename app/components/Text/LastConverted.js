import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConverted = (props) => {
  const {
    date, base, quote, conversionRate,
  } = props;
  return (
    <Text style={styles.smallText}>
      1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
  );
};

LastConverted.propTypes = {
  date: PropTypes.object.isRequired,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default LastConverted;
