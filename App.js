import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MyButton } from "./src/components/button";

export default function App() {
  const [label, setLabel] = React.useState("");
  const [num1, setNum1] = React.useState(null);
  const [sign, setSign] = React.useState("");

  const appendLabel = (value) => {
    setLabel(label + value.toString());
  };

  const setFirtsNum = () => {
    setNum1(parseInt(label));
    console.log("num1 setted to:", parseInt(label));
    setLabel("");
  };

  const plus = () => {
    setFirtsNum();
    setSign("+");
  };

  const minus = () => {
    setFirtsNum();
    setSign("-");
  };

  const multiply = () => {
    setFirtsNum();
    setSign("*");
  };

  const divide = () => {
    setFirtsNum();
    setSign("/");
  };

  const power = () => {
    setFirtsNum();
    setSign("^");
  };



  const calc = () => {
    setLabel("");
    let result = parseInt(label);
    switch (sign) {
      case "+":
        result = num1 + result;
        break;
      case "-":
        result = num1 - result;
        break;
      case "*":
        result = num1 * result;
        break;
      case "/":
        result = num1 / result;
        break;
      case "^":
        result = num1 ** result;
        break;
      default:
        break;
    }
    setLabel(result.toString());
    setSign('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroupInput}>
        <TextInput
          style={styles.input}
          value={label}
          keyboardType={"numeric"}
          onChange={(e) => {
            setLabel(e.nativeEvent.text);
          }}
        />
        <MyButton
          symbol={"<-"}
          handler={() => {
            setLabel(label.slice(0, -1));
          }}
          onLongPress={()=>{
            setLabel('');
          }}
        />
      </View>
      <View style={styles.buttonGroup}>
        <MyButton
          symbol={"1"}
          handler={() => {
            appendLabel(1);
          }}
        />
        <MyButton
          symbol={"2"}
          handler={() => {
            appendLabel(2);
          }}
        />
        <MyButton
          symbol={"3"}
          handler={() => {
            appendLabel(3);
          }}
        />
        <MyButton
          symbol={"*"}
          handler={() => {
            multiply(1);
          }}
        />
      </View>

      <View style={styles.buttonGroup}>
        <MyButton
          symbol={"4"}
          handler={() => {
            appendLabel(4);
          }}
        />
        <MyButton
          symbol={"5"}
          handler={() => {
            appendLabel(5);
          }}
        />
        <MyButton
          symbol={"6"}
          handler={() => {
            appendLabel(6);
          }}
        />
        <MyButton
          symbol={"/"}
          handler={() => {
            divide();
          }}
        />
      </View>
      <View style={styles.buttonGroup}>
        <MyButton
          symbol={"7"}
          handler={() => {
            appendLabel(7);
          }}
        />
        <MyButton
          symbol={"8"}
          handler={() => {
            appendLabel(8);
          }}
        />
        <MyButton
          symbol={"9"}
          handler={() => {
            appendLabel(9);
          }}
        />
        <MyButton
          symbol={"^"}
          handler={() => {
            power(1);
          }}
        />
      </View>
      <View style={styles.buttonGroup}>
        <MyButton
          symbol={"+"}
          handler={() => {
            plus();
          }}
        />
        <MyButton
          symbol={"0"}
          handler={() => {
            appendLabel(0);
          }}
        />
        <MyButton
          symbol={"-"}
          handler={() => {
            minus();
          }}
        />
        <MyButton
          symbol={"="}
          handler={() => {
            calc();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 420
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000",
    maxWidth: "100%",
  },

  input: {
    backgroundColor: "teal",
    color: "white",
    fontSize: 40,
    width: '70%',
    textAlign: "right",
    padding: 10,
    borderRadius: 20,
  },

  buttonGroupInput: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000",
    justifyContent: "space-between",
    width: "76%",
    marginBottom: 10
  }
});
