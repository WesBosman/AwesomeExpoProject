import { StyleSheet, Text, View } from 'react-native';
import Hyperview from 'hyperview';

export default function App() {
  return (
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
