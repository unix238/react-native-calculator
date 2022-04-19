import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export const MyButton = ({ symbol, handler, onLongPress }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={handler} style={styles.button} onLongPress={onLongPress}>
        <Text style={styles.text}>{symbol}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    margin: 5,
    padding: 5,
    backgroundColor: "teal",
  },
    button:{
        width:60,
        height:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    }
  
});
