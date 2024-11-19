import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => router.push("/HomeScreen")}>
      <View style={styles.container}>
        <Text style={styles.tekst}>
          Tu ce ic slika kad je ti i nato najdete umisto bile pozadine
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tekst: {
    textAlign: "center",
    fontSize: 18,
  },
});
