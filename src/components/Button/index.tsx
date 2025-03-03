import React from "react";
import { View, Text, Pressable } from "react-native";

import { styles } from "./styles";

type ButtonProps = {
  title: string,
  handlePass: any
};

export const Button = ({ title, handlePass }: ButtonProps) => {
  return (
    <View>
      <Pressable 
        accessibilityLabel={title} 
        onPress={handlePass}
        style={styles.container}
        >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};
