import React from "react";
import { StyleSheet, View } from "react-native";
import Loader from "./components/Loader";
import { TouchableOpacity, Text } from "react-native";

class App extends React.Component {
  state = {
    showLoader: true
  };
  _show = () => {
    this.setState({
      showLoader: true
    });
  };
  _hide = () => {
    this.setState({
      showLoader: false
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 25, textAlign: "center", padding: 10 }}>React Material Spinner Demo</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={this._show}>
            <Text>Show</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this._hide}>
            <Text>Hide</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>{this.state.showLoader && <Loader />}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1
  },
  button: {
    borderWidth: 1,
    color: "black",
    padding: 5,
    marginBottom: 10
  }
});

export default App;
