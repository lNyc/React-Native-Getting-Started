import React from 'react';
import { View, FlatList, Text } from 'react-native';
import currencies from '../data/currencies';

const CurrencyList = () => (
  <FlatList
    data={currencies}
    renderItem={({ item }) => <Text>{item}</Text>}
    keyExtractor={item => item}
  />
);

export default CurrencyList;
