import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const Logo =( ) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textHeading}>Gerador de Senhas!</Text>
        <Text style={styles.text} >Gere senhas seguras rapidamente! 🔒</Text>
    </View>
  );
}