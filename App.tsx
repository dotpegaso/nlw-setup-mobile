import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_800ExtraBold } from '@expo-google-fonts/inter'

import { Loading } from './src/components';

export default function App() {

  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_800ExtraBold
  });

  if (!isFontsLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style='light' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#FFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
  }
});
