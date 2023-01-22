import { StyleSheet, ActivityIndicator, SafeAreaView } from "react-native";

const Loading = () => (
  <SafeAreaView style={styles.container}>
    <ActivityIndicator color="#FFF" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
