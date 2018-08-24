import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/Textinput';
import { ClearButton } from '../components/Button';
import { Header } from '../components/Header';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('press Quote');
  };

  handleTextChange = (text) => {
    console.log(`change text ${text}`);
  };

  handleSwapCurrency = () => {
    console.log('press swap');
  };

  handleOptionsPress = () => {
    console.log('press options');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />

        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
        />
        <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
      </Container>
    );
  }
}

export default Home;
