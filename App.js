// this is a back up for the original App.js file
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Switch } from "react-native";
//"text" is a component
//functional component
//"View" is like a body tag in html and is shown on your app
export default function App() {
  return (
    <View style={styles.container}>
      <Text>watch my 9 milimeter go.. BANG!</Text>
      <Button title="Check me out punk!" />
      <Text> BANG lil meow meow!! </Text>
      <Switch />
      <Image source={require("./assets/meow.jpg")} style={styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
  },
  img: {
    height: 200,
    width: 200,
    margin: 15,
    padding: 15,
  },
});
