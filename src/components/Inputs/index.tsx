import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

type InputProps = {
  pass: string
}

export const Inputs = ({pass}: InputProps) => {
  return (
    <View style={styles.container}>
        <TextInput 
          style={styles.textField} 
          placeholder='Sua senha será gerada aqui!' 
          value={pass}
        />
    </View>
  );
}