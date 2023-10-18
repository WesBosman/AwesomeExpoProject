import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hyperview from 'hyperview';

export default function App() {
  return (
    // <WebView
    //   style={styles.container}
    //   source={{
    //     uri: 'https://66a1-2600-4040-115b-0-21a1-f60e-9a22-1b81.ngrok-free.app/src/static/hello-world.xml',
    //   }}
    // />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Hyperview
      fetch={fetch}
      entrypointUrl={'http://localhost:3000/src/static/hello-world.xml'}
    ></Hyperview>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
