import React, { Component } from "react";
import { View } from "react-native";

class Ball extends Component {
  render() {
    return <View style={styles.ballStyle} />;
  }
}
const styles = {
  ballStyle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 30,
    borderColor: "black"
  }
};
export default Ball;